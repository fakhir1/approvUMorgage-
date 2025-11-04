/**
 * Get Current User API
 * Returns the currently authenticated user's data
 */

import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    // Get user profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle() // Use maybeSingle instead of single to allow null results

    if (profileError) {
      console.error('Error fetching profile:', profileError)
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        ...(profile || {}), // Spread profile only if it exists
      },
    })
  } catch (error) {
    console.error('User GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
