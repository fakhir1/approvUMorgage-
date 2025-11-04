/**
 * Admin Pages API Route
 * CRUD operations for pages management
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase/server'
import { isAdmin } from '@/lib/auth/helpers'

// GET /api/admin/pages - Get all pages (with optional filters) or single page by ID
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

    // Check if requesting single page by ID
    const id = searchParams.get('id')
    if (id) {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching page:', error)
        return NextResponse.json(
          { error: 'Page not found', details: error.message },
          { status: 404 }
        )
      }

      // Transform path to slug for frontend
      // Also map database field names back to frontend field names
      const pageData = {
        ...data,
        slug: data.path,
        seo_title: data.meta_title,
        og_image: data.featured_image,
        parent_page_id: data.parent_id,
      }

      return NextResponse.json({ data: pageData })
    }

    // Otherwise, fetch list of pages with filters
    const status = searchParams.get('status')
    const vertical = searchParams.get('vertical')
    const pageType = searchParams.get('page_type')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    let query = supabase
      .from('pages')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) query = query.eq('status', status)
    if (vertical) query = query.eq('vertical', vertical)
    if (pageType) query = query.eq('page_type', pageType)

    const { data, error, count } = await query

    if (error) {
      console.error('Error fetching pages:', error)
      return NextResponse.json(
        { error: 'Failed to fetch pages', details: error.message },
        { status: 500 }
      )
    }

    // Transform path to slug for frontend
    // Also map database field names back to frontend field names
    const pagesData = (data || []).map(page => ({
      ...page,
      slug: page.path,
      seo_title: page.meta_title,
      og_image: page.featured_image,
      parent_page_id: page.parent_id,
    }))

    return NextResponse.json({
      data: pagesData,
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
    })
  } catch (error) {
    console.error('Pages GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/admin/pages - Create new page
export async function POST(request: NextRequest) {
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
    const body = await request.json()

    // Transform slug to path (database uses 'path' not 'slug')
    // Also map frontend field names to database field names
    const pageData = {
      ...body,
      path: body.slug || body.path, // Use slug as path if path not provided
      meta_title: body.seo_title || body.meta_title, // Map seo_title to meta_title
      featured_image: body.og_image || body.featured_image, // Map og_image to featured_image
      parent_id: body.parent_page_id || body.parent_id, // Map parent_page_id to parent_id
    }
    
    // Remove fields that don't exist in database schema
    delete pageData.slug
    delete pageData.seo_title
    delete pageData.og_image
    delete pageData.parent_page_id

    const { data, error } = await supabase
      .from('pages')
      .insert(pageData)
      .select()
      .single()

    if (error) {
      console.error('Error creating page:', error)
      return NextResponse.json(
        { error: 'Failed to create page', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { data, message: 'Page created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Pages POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/pages - Update page
export async function PUT(request: NextRequest) {
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
    const id = searchParams.get('id')
    const body = await request.json()

    if (!id) {
      return NextResponse.json(
        { error: 'Page ID is required' },
        { status: 400 }
      )
    }

    // Transform slug to path (database uses 'path' not 'slug')
    // Also map frontend field names to database field names
    const pageData = {
      ...body,
      path: body.slug || body.path,
      meta_title: body.seo_title || body.meta_title, // Map seo_title to meta_title
      featured_image: body.og_image || body.featured_image, // Map og_image to featured_image
      parent_id: body.parent_page_id || body.parent_id, // Map parent_page_id to parent_id
    }
    
    // Remove fields that don't exist in database schema
    delete pageData.slug
    delete pageData.seo_title
    delete pageData.og_image
    delete pageData.parent_page_id

    const { data, error } = await supabase
      .from('pages')
      .update(pageData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating page:', error)
      return NextResponse.json(
        { error: 'Failed to update page', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      data,
      message: 'Page updated successfully',
    })
  } catch (error) {
    console.error('Pages PUT error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/pages - Delete page
export async function DELETE(request: NextRequest) {
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
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Page ID is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('pages')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting page:', error)
      return NextResponse.json(
        { error: 'Failed to delete page', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Page deleted successfully',
    })
  } catch (error) {
    console.error('Pages DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
