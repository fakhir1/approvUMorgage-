/**
 * Admin Blog Posts API Route
 * CRUD operations for blog posts management
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase/server'
import { isAdmin } from '@/lib/auth/helpers'

// GET /api/admin/blog - Get all blog posts or single post by ID
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

    // Check if requesting single post by ID
    const id = searchParams.get('id')
    if (id) {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*, profiles(email, first_name, last_name)')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching blog post:', error)
        return NextResponse.json(
          { error: 'Blog post not found', details: error.message },
          { status: 404 }
        )
      }

      // Map database field names back to frontend field names
      const postData = {
        ...data,
        featured_image: data.featured_image_url,
        seo_title: data.meta_title,
      }

      return NextResponse.json({ data: postData })
    }

    // Otherwise, fetch list of blog posts with filters
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    let query = supabase
      .from('blog_posts')
      .select('*, profiles(email, first_name, last_name)', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) query = query.eq('status', status)
    if (category) query = query.eq('category', category)

    const { data, error, count } = await query

    if (error) {
      console.error('Error fetching blog posts:', error)
      return NextResponse.json(
        { error: 'Failed to fetch blog posts', details: error.message },
        { status: 500 }
      )
    }

    // Map database field names back to frontend field names
    const postsData = (data || []).map(post => ({
      ...post,
      featured_image: post.featured_image_url,
      seo_title: post.meta_title,
    }))

    return NextResponse.json({
      data: postsData,
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
    })
  } catch (error) {
    console.error('Blog posts GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/admin/blog - Create new blog post
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

    // Convert comma-separated strings to arrays for PostgreSQL
    const tagsArray = body.tags 
      ? (typeof body.tags === 'string' ? body.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : body.tags)
      : null;
    
    const metaKeywordsArray = body.meta_keywords
      ? (typeof body.meta_keywords === 'string' ? body.meta_keywords.split(',').map((k: string) => k.trim()).filter(Boolean) : body.meta_keywords)
      : null;

    // Map frontend field names to database field names
    const blogData = {
      ...body,
      featured_image_url: body.featured_image || body.featured_image_url,
      meta_title: body.seo_title || body.meta_title,
      tags: tagsArray,
      meta_keywords: metaKeywordsArray,
    }
    
    // Remove frontend-only fields
    delete blogData.featured_image
    delete blogData.seo_title

    const { data, error } = await supabase
      .from('blog_posts')
      .insert(blogData)
      .select()
      .single()

    if (error) {
      console.error('Error creating blog post:', error)
      return NextResponse.json(
        { error: 'Failed to create blog post', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { data, message: 'Blog post created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Blog posts POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/blog - Update blog post
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
        { error: 'Blog post ID is required' },
        { status: 400 }
      )
    }

    // Convert comma-separated strings to arrays for PostgreSQL
    const tagsArray = body.tags 
      ? (typeof body.tags === 'string' ? body.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : body.tags)
      : null;
    
    const metaKeywordsArray = body.meta_keywords
      ? (typeof body.meta_keywords === 'string' ? body.meta_keywords.split(',').map((k: string) => k.trim()).filter(Boolean) : body.meta_keywords)
      : null;

    // Map frontend field names to database field names
    const blogData = {
      ...body,
      featured_image_url: body.featured_image || body.featured_image_url,
      meta_title: body.seo_title || body.meta_title,
      tags: tagsArray,
      meta_keywords: metaKeywordsArray,
    }
    
    // Remove frontend-only fields
    delete blogData.featured_image
    delete blogData.seo_title

    const { data, error } = await supabase
      .from('blog_posts')
      .update(blogData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating blog post:', error)
      return NextResponse.json(
        { error: 'Failed to update blog post', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      data,
      message: 'Blog post updated successfully',
    })
  } catch (error) {
    console.error('Blog posts PUT error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/blog - Delete blog post
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
        { error: 'Blog post ID is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting blog post:', error)
      return NextResponse.json(
        { error: 'Failed to delete blog post', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Blog post deleted successfully',
    })
  } catch (error) {
    console.error('Blog posts DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
