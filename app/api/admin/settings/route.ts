/**
 * Admin Settings API Route
 * CRUD operations for site settings
 */

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { isAdmin } from '@/lib/auth/helpers'

// GET /api/admin/settings - Get all settings or specific setting
// This endpoint is PUBLIC for reading to allow footer/components to fetch settings
export async function GET(request: NextRequest) {
  try {
    const supabase = createAdminClient()
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')

    if (key) {
      // Get specific setting by key
      const { data, error } = await supabase
        .from('settings' as any)
        .select('*')
        .eq('key', key)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching setting:', error)
        return NextResponse.json(
          { error: 'Failed to fetch setting', details: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({ data })
    }

    // Get all settings
    const { data, error } = await supabase
      .from('settings' as any)
      .select('*')
      .order('category', { ascending: true })
      .order('key', { ascending: true })

    if (error) {
      console.error('Error fetching settings:', error)
      return NextResponse.json(
        { error: 'Failed to fetch settings', details: error.message },
        { status: 500 }
      )
    }

    // Transform array to object for easier access
    const settingsObj = data.reduce((acc: any, setting: any) => {
      acc[setting.key] = setting.value
      return acc
    }, {})

    return NextResponse.json({ data: settingsObj, raw: data })
  } catch (error) {
    console.error('Settings GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/admin/settings - Create or update setting
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
    const { key, value, category, label, type } = body

    if (!key) {
      return NextResponse.json(
        { error: 'Setting key is required' },
        { status: 400 }
      )
    }

    // Upsert setting (insert or update if exists)
    const { data, error } = await supabase
      .from('settings' as any)
      .upsert(
        {
          key,
          value,
          category: category || 'general',
          label: label || key,
          type: type || 'string',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'key' }
      )
      .select()
      .single()

    if (error) {
      console.error('Error saving setting:', error)
      return NextResponse.json(
        { error: 'Failed to save setting', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      data,
      message: 'Setting saved successfully',
    })
  } catch (error) {
    console.error('Settings POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/settings - Bulk update settings
export async function PUT(request: NextRequest) {
  try {
    console.log('[Settings API] PUT request received')
    
    const isUserAdmin = await isAdmin()
    console.log('[Settings API] Is user admin:', isUserAdmin)
    
    if (!isUserAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      )
    }

    const supabase = createAdminClient()
    const body = await request.json()
    console.log('[Settings API] Request body keys:', Object.keys(body))
    
    const { settings } = body

    if (!settings || typeof settings !== 'object') {
      console.error('[Settings API] Invalid settings object')
      return NextResponse.json(
        { error: 'Settings object is required' },
        { status: 400 }
      )
    }

    console.log('[Settings API] Number of settings to update:', Object.keys(settings).length)

    // Convert settings object to array of upserts
    const settingsArray = Object.entries(settings).map(([key, value]) => {
      // Determine category from key prefix
      let category = 'general'
      if (key.startsWith('site')) category = 'site'
      else if (key.startsWith('meta') || key.startsWith('google')) category = 'seo'
      else if (key.startsWith('smtp') || key.startsWith('email')) category = 'email'
      else if (key.startsWith('enable') || key.toLowerCase().includes('mode')) category = 'features'
      else if (key.includes('Url')) category = 'social'

      // Determine type and convert value
      let type = 'string'
      let convertedValue = value
      
      if (typeof value === 'boolean') {
        type = 'boolean'
        convertedValue = String(value) // Store as string 'true' or 'false'
      } else if (typeof value === 'number') {
        type = 'number'
        convertedValue = String(value)
      } else if (typeof value === 'object') {
        type = 'json'
        convertedValue = JSON.stringify(value)
      } else {
        convertedValue = String(value)
      }

      return {
        key,
        value: convertedValue,
        category,
        label: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
        type,
        updated_at: new Date().toISOString(),
      }
    })

    console.log('Upserting settings:', settingsArray.length, 'items')
    console.log('First setting sample:', settingsArray[0])

    // Bulk upsert all settings
    const { data, error } = await supabase
      .from('settings' as any)
      .upsert(settingsArray, { onConflict: 'key' })
      .select()

    if (error) {
      console.error('[Settings API] Database error:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
      return NextResponse.json(
        { 
          error: 'Failed to update settings', 
          details: error.message,
          hint: error.hint,
          code: error.code
        },
        { status: 500 }
      )
    }

    console.log('Successfully updated', data?.length || 0, 'settings')

    return NextResponse.json({
      data,
      message: 'Settings updated successfully',
      count: data?.length || 0,
    })
  } catch (error: any) {
    console.error('[Settings API] PUT error:', {
      message: error.message,
      stack: error.stack,
      error: error
    })
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message,
        type: error.name
      },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/settings - Delete a setting
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
    const key = searchParams.get('key')

    if (!key) {
      return NextResponse.json(
        { error: 'Setting key is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('settings' as any)
      .delete()
      .eq('key', key)

    if (error) {
      console.error('Error deleting setting:', error)
      return NextResponse.json(
        { error: 'Failed to delete setting', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Setting deleted successfully',
    })
  } catch (error) {
    console.error('Settings DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
