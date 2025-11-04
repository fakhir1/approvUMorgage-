/**
 * Admin Content Blocks API Route
 * CRUD operations for content blocks management
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { isAdmin } from '@/lib/auth/helpers'

// GET /api/admin/content-blocks
export async function GET(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = await createServerSupabaseClient()
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    let query = supabase
      .from('content_blocks')
      .select('*')
      .order('created_at', { ascending: false })

    if (status) query = query.eq('status', status)

    const { data, error } = await query

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch content blocks', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ contentBlocks: data })
  } catch (error) {
    console.error('Content blocks GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/admin/content-blocks
export async function POST(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = await createServerSupabaseClient()
    const body = await request.json()

    const { data, error } = await supabase
      .from('content_blocks')
      .insert(body)
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create content block', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { contentBlock: data, message: 'Content block created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Content blocks POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/content-blocks
export async function PUT(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = await createServerSupabaseClient()
    const body = await request.json()
    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Content block ID is required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('content_blocks')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to update content block', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      contentBlock: data,
      message: 'Content block updated successfully',
    })
  } catch (error) {
    console.error('Content blocks PUT error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/content-blocks
export async function DELETE(request: NextRequest) {
  try {
    const isUserAdmin = await isAdmin()
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = await createServerSupabaseClient()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Content block ID is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('content_blocks')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json(
        { error: 'Failed to delete content block', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Content block deleted successfully',
    })
  } catch (error) {
    console.error('Content blocks DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
