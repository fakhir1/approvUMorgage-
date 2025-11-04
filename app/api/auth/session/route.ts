/**
 * Auth Session API Route
 * Returns current user session information
 */

import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient()
    
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError) {
      return NextResponse.json(
        { error: 'Failed to get session', details: sessionError.message },
        { status: 500 }
      )
    }

    if (!session) {
      return NextResponse.json(
        { user: null, session: null },
        { status: 200 }
      )
    }

    // Get user profile with role
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role, first_name, last_name, email, avatar_url')
      .eq('user_id', session.user.id)
      .single()

    if (profileError) {
      console.error('Profile error:', profileError)
    }

    return NextResponse.json(
      {
        user: session.user,
        session,
        profile: profile || null,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Session error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
