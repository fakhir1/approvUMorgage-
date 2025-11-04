'use client'

/**
 * Authentication Context Provider
 * Manages user session state across the application
 */

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User, Session } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any; data: any }>
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: any; data: any }>
  signOut: () => Promise<void>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    // Get initial session
    const initAuth = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession()
        setSession(initialSession)
        setUser(initialSession?.user ?? null)

        // Check if user is admin
        if (initialSession?.user) {
          await checkAdminStatus(initialSession.user.id)
        }
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setLoading(false)
      }
    }

    initAuth()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user ?? null)

      // Check admin status on auth change
      if (newSession?.user) {
        await checkAdminStatus(newSession.user.id)
      } else {
        setIsAdmin(false)
      }

      // Refresh the page to update server components
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  // Check if user has admin role
  const checkAdminStatus = async (userId: string) => {
    try {
      console.log('Checking admin status for user:', userId)
      
      // Ensure we have a valid session first
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        console.log('No active session, skipping admin check')
        setIsAdmin(false)
        return
      }
      
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', userId)
        .single()

      console.log('Admin check result:', { data, error })

      if (error) {
        console.error('Error querying profiles:', error)
        setIsAdmin(false)
        return
      }

      if (data) {
        const adminStatus = data.role === 'admin'
        console.log('Setting isAdmin to:', adminStatus)
        setIsAdmin(adminStatus)
      } else {
        console.log('No profile data found')
        setIsAdmin(false)
      }
    } catch (error) {
      console.error('Exception checking admin status:', error)
      setIsAdmin(false)
    }
  }

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data.session) {
      router.push('/admin')
    }

    return { data, error }
  }

  // Sign up with email and password
  const signUp = async (email: string, password: string, metadata?: any) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    })

    return { data, error }
  }

  // Sign out
  const signOut = async () => {
    await supabase.auth.signOut()
    setIsAdmin(false)
    router.push('/')
  }

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    isAdmin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
