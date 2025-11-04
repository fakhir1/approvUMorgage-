/**
 * Supabase Client for Browser (Client Components)
 * This client is used in Client Components and uses the anon key
 */

import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '../../types/database'

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Export a singleton instance for convenience
export const supabase = createClient()
