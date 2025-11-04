/**
 * Admin Users API Route
 * Get users for admin purposes (e.g., selecting blog post authors)
 */

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { isAdmin } from '@/lib/auth/helpers'

// GET /api/admin/users - Get users (optionally filtered by role)
export async function GET(request: NextRequest) {
  try {
    // Check admin access
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = createAdminClient()
    const { searchParams } = new URL(request.url)
    const role = searchParams.get('role')

    // Build query
    let query = supabase
      .from('profiles')
      .select('id, email, first_name, last_name, role')
      .order('created_at', { ascending: false })

    // Filter by role if specified
    if (role) {
      query = query.eq('role', role)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching users:', error)
      return NextResponse.json(
        { error: 'Failed to fetch users', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Users GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/admin/users - Create new user
export async function POST(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = createAdminClient()
    const body = await request.json()

    // Create user in auth.users first
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: body.email,
      password: body.password || Math.random().toString(36).slice(-12), // Random password if not provided
      email_confirm: true, // Auto-confirm email
    })

    if (authError) {
      console.error('Error creating auth user:', authError)
      return NextResponse.json(
        { error: authError.message || 'Failed to create user' },
        { status: 500 }
      )
    }

    // Check if profile already exists (may be auto-created by trigger)
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', authData.user.id)
      .single()

    let data
    let error

    if (existingProfile) {
      // Update existing profile
      const updateResult = await supabase
        .from('profiles')
        .update({
          email: body.email,
          first_name: body.first_name || null,
          last_name: body.last_name || null,
          phone: body.phone || null,
          role: body.role || 'user',
          avatar_url: body.avatar_url || null,
        })
        .eq('user_id', authData.user.id)
        .select()
        .single()
      
      data = updateResult.data
      error = updateResult.error
    } else {
      // Create new profile
      const profileData = {
        user_id: authData.user.id,
        email: body.email,
        first_name: body.first_name || null,
        last_name: body.last_name || null,
        phone: body.phone || null,
        role: body.role || 'user',
        avatar_url: body.avatar_url || null,
      }

      const insertResult = await supabase
        .from('profiles')
        .insert(profileData)
        .select()
        .single()
      
      data = insertResult.data
      error = insertResult.error
    }

    if (error) {
      console.error('Error creating/updating profile:', error)
      // Try to delete the auth user if profile creation fails
      await supabase.auth.admin.deleteUser(authData.user.id)
      return NextResponse.json(
        { error: 'Failed to create user profile' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error in POST /api/admin/users:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/users - Update existing user
export async function PUT(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = createAdminClient()
    const body = await request.json()
    const { id, password, ...updates } = body

    if (!id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Update profile
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating user:', error)
      return NextResponse.json(
        { error: 'Failed to update user' },
        { status: 500 }
      )
    }

    // If password is provided, update auth user
    if (password) {
      const { error: authError } = await supabase.auth.admin.updateUserById(
        data.user_id,
        { password }
      )

      if (authError) {
        console.error('Error updating user password:', authError)
      }
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error in PUT /api/admin/users:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/users - Delete user
export async function DELETE(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = createAdminClient()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Get user_id first
    const { data: profile } = await supabase
      .from('profiles')
      .select('user_id')
      .eq('id', id)
      .single()

    // Delete profile
    const { error: profileError } = await supabase
      .from('profiles')
      .delete()
      .eq('id', id)

    if (profileError) {
      console.error('Error deleting profile:', profileError)
      return NextResponse.json(
        { error: 'Failed to delete user profile' },
        { status: 500 }
      )
    }

    // Delete auth user
    if (profile?.user_id) {
      const { error: authError } = await supabase.auth.admin.deleteUser(profile.user_id)
      if (authError) {
        console.error('Error deleting auth user:', authError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/admin/users:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
