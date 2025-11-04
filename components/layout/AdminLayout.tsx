'use client'

/**
 * Admin Layout Component
 * Main layout wrapper for admin pages with header, sidebar, and content area
 */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { AdminProvider } from '@/contexts/AdminContext'
import { AdminSidebar } from './AdminSidebar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Loader2, User, LogOut, Bell, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AdminLayoutProps {
  children: React.ReactNode
  title?: string
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, isAdmin, signOut, loading } = useAuth()
  const router = useRouter()

  // Check authentication and admin status
  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/login?message=Admin access required')
    }
  }, [user, isAdmin, loading, router])

  // Show loading state while checking auth
  if (loading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <AdminProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar - Desktop */}
        <div className="hidden md:block">
          <AdminSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
        </div>

        {/* Main Content */}
        <div
          className={cn(
            'min-h-screen transition-all duration-300',
            isCollapsed ? 'md:ml-16' : 'md:ml-64'
          )}
        >
          {/* Header */}
          <header className="sticky top-0 z-30 border-b bg-card backdrop-blur supports-[backdrop-filter]:bg-card/95">
            <div className="flex h-16 items-center justify-between px-4 lg:px-6">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Title */}
              <div className="flex-1">
                {title && (
                  <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                )}
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-2">
                {/* Notifications */}
                <Button variant="ghost" size="icon">
                  <Bell className="w-5 h-5" />
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="hidden sm:inline-block text-sm font-medium">
                        {user.email?.split('@')[0] || 'Admin'}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Admin Account</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push('/admin/settings')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-4 lg:p-6">{children}</main>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed left-0 top-0 z-50 h-screen md:hidden">
              <AdminSidebar isCollapsed={false} onToggle={() => setIsMobileMenuOpen(false)} />
            </div>
          </>
        )}
      </div>
    </AdminProvider>
  )
}
