/**
 * Authentication Helper Functions
 * Utilities for checking user authentication and roles on the server
 */

import { cookies } from 'next/headers'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import type { User } from '@supabase/supabase-js'

/**
 * Get the current authenticated user (server-side)
 * @returns User object or null if not authenticated
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const supabase = await createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

/**
 * Check if the current user is authenticated
 * @returns true if user is logged in, false otherwise
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return user !== null
}

/**
 * Check if the current user has admin role
 * @returns true if user is admin, false otherwise
 */
export async function isAdmin(): Promise<boolean> {
  try {
    const user = await getCurrentUser()
    if (!user) return false

    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single()

    if (error || !data) return false
    return data.role === 'admin'
  } catch (error) {
    console.error('Error checking admin status:', error)
    return false
  }
}

/**
 * Get user's role from profiles table
 * @returns User role ('admin' | 'moderator' | 'user') or null
 */
export async function getUserRole(): Promise<string | null> {
  try {
    const user = await getCurrentUser()
    if (!user) return null

    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single()

    if (error || !data) return null
    return data.role
  } catch (error) {
    console.error('Error getting user role:', error)
    return null
  }
}

/**
 * Get user's full profile
 * @returns User profile object or null
 */
export async function getUserProfile() {
  try {
    const user = await getCurrentUser()
    if (!user) return null

    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (error) {
      console.error('Error getting user profile:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error getting user profile:', error)
    return null
  }
}

/**
 * Require authentication - redirect to login if not authenticated
 * Use this in Server Components that require auth
 */
export async function requireAuth() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    // In Next.js 15, we can't redirect directly in server functions
    // This should be handled by middleware
    throw new Error('Authentication required')
  }
}

/**
 * Require admin role - throw error if not admin
 * Use this in Server Components that require admin access
 */
export async function requireAdmin() {
  const isUserAdmin = await isAdmin()
  if (!isUserAdmin) {
    throw new Error('Admin access required')
  }
}
