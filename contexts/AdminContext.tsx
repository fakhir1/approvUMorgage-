'use client'

/**
 * Admin Context Provider
 * Manages admin-specific state and provides React Query integration
 */

import { createContext, useContext, ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

interface AdminContextType {
  // Add any admin-specific context values here
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  // Create a query client once per provider instance
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }))

  const value: AdminContextType = {
    // Add any admin-specific context values here
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AdminContext.Provider value={value}>
        {children}
        <Toaster position="top-right" richColors />
      </AdminContext.Provider>
    </QueryClientProvider>
  )
}

// Custom hook to use admin context
export function useAdminContext() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdminContext must be used within an AdminProvider')
  }
  return context
}
