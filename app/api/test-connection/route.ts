/**
 * Test Supabase Connection API Route
 * Visit: http://localhost:3000/api/test-connection
 * This will verify your Supabase configuration is correct
 */

import { createAdminClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createAdminClient()

    // Test 1: Check connection by querying agents table
    const { data: agents, error: agentsError } = await supabase
      .from('agents')
      .select('id, name, email')
      .limit(3)

    if (agentsError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to query agents table',
          details: agentsError.message,
          hint: 'Check if your SUPABASE_SERVICE_ROLE_KEY is correct for project xxcznmlupkezjmdnpnrs',
        },
        { status: 500 }
      )
    }

    // Test 2: Check other tables
    const { data: lenders, error: lendersError } = await supabase
      .from('lenders')
      .select('id, name')
      .limit(3)

    const { data: rates, error: ratesError } = await supabase
      .from('mortgage_rates')
      .select('id, rate_type, rate')
      .limit(3)

    // Test 3: Get database info
    const { data: pagesCount } = await supabase
      .from('pages')
      .select('id', { count: 'exact', head: true })

    const { data: contentCount } = await supabase
      .from('content_blocks')
      .select('id', { count: 'exact', head: true })

    return NextResponse.json({
      success: true,
      message: '✅ Supabase connection successful!',
      project: 'xxcznmlupkezjmdnpnrs',
      project_url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      data: {
        agents: {
          count: agents?.length || 0,
          sample: agents?.slice(0, 2),
          error: agentsError?.message,
        },
        lenders: {
          count: lenders?.length || 0,
          sample: lenders?.slice(0, 2),
          error: lendersError?.message,
        },
        mortgage_rates: {
          count: rates?.length || 0,
          sample: rates?.slice(0, 2),
          error: ratesError?.message,
        },
        pages: {
          total: pagesCount?.length || 0,
        },
        content_blocks: {
          total: contentCount?.length || 0,
        },
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Connection test failed',
        message: error.message,
        hint: 'Make sure SUPABASE_SERVICE_ROLE_KEY is set correctly in .env.local',
      },
      { status: 500 }
    )
  }
}
