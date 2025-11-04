import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { isAdmin } from '@/lib/auth/helpers';

// GET: Fetch all mortgage applications with applicant details
export async function GET(request: NextRequest) {
  try {
    // Check admin permission
    const adminCheck = await isAdmin();
    if (!adminCheck.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const supabase = createAdminClient();
    
    // Build query with joins to get applicant profile
    let query = supabase
      .from('mortgage_applications')
      .select(`
        *,
        profile:profiles!mortgage_applications_user_id_fkey (
          id,
          first_name,
          last_name,
          email,
          phone
        )
      `, { count: 'exact' });

    // Apply filters
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    if (search) {
      query = query.or(
        `property_address.ilike.%${search}%,property_city.ilike.%${search}%,id.ilike.%${search}%`
      );
    }

    // Order by most recent first
    query = query.order('created_at', { ascending: false });

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching applications:', error);
      return NextResponse.json(
        { error: 'Failed to fetch applications' },
        { status: 500 }
      );
    }

    // Transform data to include applicant info
    const applications = data?.map((app: any) => ({
      id: app.id,
      applicant_name: app.profile 
        ? `${app.profile.first_name || ''} ${app.profile.last_name || ''}`.trim() || 'Unknown'
        : 'Unknown',
      applicant_email: app.profile?.email || '',
      applicant_phone: app.profile?.phone || '',
      status: app.status,
      application_type: app.application_type,
      property_address: app.property_address || '',
      property_city: app.property_city || '',
      property_province: app.property_province || '',
      property_postal_code: app.property_postal_code || '',
      property_value: app.property_value,
      down_payment: app.down_payment,
      credit_score: app.credit_score,
      annual_income: app.annual_income,
      employment_status: app.employment_status,
      notes: app.notes,
      submitted_at: app.submitted_at,
      approved_at: app.approved_at,
      created_at: app.created_at,
      updated_at: app.updated_at,
      user_id: app.user_id,
    })) || [];

    return NextResponse.json({
      applications,
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
    });
  } catch (error) {
    console.error('Error in GET /api/admin/applications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET single application by ID
export async function GET_BY_ID(id: string) {
  try {
    const adminCheck = await isAdmin();
    if (!adminCheck.isAdmin) {
      return { error: 'Unauthorized', status: 403 };
    }

    const supabase = createAdminClient();
    
    const { data, error } = await supabase
      .from('mortgage_applications')
      .select(`
        *,
        profile:profiles!mortgage_applications_user_id_fkey (
          id,
          first_name,
          last_name,
          email,
          phone
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching application:', error);
      return { error: 'Application not found', status: 404 };
    }

    return {
      data: {
        ...data,
        applicant_name: data.profile 
          ? `${data.profile.first_name || ''} ${data.profile.last_name || ''}`.trim() || 'Unknown'
          : 'Unknown',
        applicant_email: data.profile?.email || '',
        applicant_phone: data.profile?.phone || '',
      },
      status: 200,
    };
  } catch (error) {
    console.error('Error in GET_BY_ID:', error);
    return { error: 'Internal server error', status: 500 };
  }
}

// PUT: Update application (mainly for status changes)
export async function PUT(request: NextRequest) {
  try {
    const adminCheck = await isAdmin();
    if (!adminCheck.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Application ID is required' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Prepare update data
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };

    if (status) {
      updateData.status = status;
      
      // Auto-set approved_at when status changes to approved
      if (status === 'approved') {
        updateData.approved_at = new Date().toISOString();
      }
    }

    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const { data, error } = await supabase
      .from('mortgage_applications')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating application:', error);
      return NextResponse.json(
        { error: 'Failed to update application' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Application updated successfully',
      application: data,
    });
  } catch (error) {
    console.error('Error in PUT /api/admin/applications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Delete an application
export async function DELETE(request: NextRequest) {
  try {
    const adminCheck = await isAdmin();
    if (!adminCheck.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Application ID is required' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const { error } = await supabase
      .from('mortgage_applications')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting application:', error);
      return NextResponse.json(
        { error: 'Failed to delete application' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Application deleted successfully',
    });
  } catch (error) {
    console.error('Error in DELETE /api/admin/applications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
