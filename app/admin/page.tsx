'use client'

/**
 * Admin Dashboard Page
 * Main landing page for the admin panel with stats, recent activity, and quick actions
 */

import { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  FileText,
  Box,
  Users,
  TrendingUp,
  Plus,
  ArrowUpRight,
  DollarSign,
  Activity,
  MessageSquare,
  Building2,
} from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { format } from 'date-fns'

interface DashboardStats {
  pages: number
  contentBlocks: number
  agents: number
  lenders: number
  rates: number
  applications: number
  contacts: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    pages: 0,
    contentBlocks: 0,
    agents: 0,
    lenders: 0,
    rates: 0,
    applications: 0,
    contacts: 0,
  })
  const [recentPages, setRecentPages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const supabase = createClient()

      // Fetch stats
      const [
        pagesRes,
        blocksRes,
        agentsRes,
        lendersRes,
        ratesRes,
        applicationsRes,
        contactsRes,
        recentPagesRes,
      ] = await Promise.all([
        supabase.from('pages').select('*', { count: 'exact', head: true }),
        supabase.from('content_blocks').select('*', { count: 'exact', head: true }),
        supabase.from('agents').select('*', { count: 'exact', head: true }),
        supabase.from('lenders').select('*', { count: 'exact', head: true }),
        supabase.from('mortgage_rates').select('*', { count: 'exact', head: true }),
        supabase.from('mortgage_applications').select('*', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
        supabase
          .from('pages')
          .select('id, title, path, status, created_at')
          .order('created_at', { ascending: false })
          .limit(5),
      ])

      setStats({
        pages: pagesRes.count || 0,
        contentBlocks: blocksRes.count || 0,
        agents: agentsRes.count || 0,
        lenders: lendersRes.count || 0,
        rates: ratesRes.count || 0,
        applications: applicationsRes.count || 0,
        contacts: contactsRes.count || 0,
      })

      setRecentPages(recentPagesRes.data || [])
    } catch (error) {
      console.error('Error loading dashboard data:', error)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Total Pages',
      value: stats.pages,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/admin/pages',
    },
    {
      title: 'Content Blocks',
      value: stats.contentBlocks,
      icon: Box,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/admin/content-blocks',
    },
    {
      title: 'Agents',
      value: stats.agents,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/admin/agents',
    },
    {
      title: 'Lenders',
      value: stats.lenders,
      icon: Building2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '/admin/lenders',
    },
    {
      title: 'Mortgage Rates',
      value: stats.rates,
      icon: TrendingUp,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      href: '/admin/rates',
    },
    {
      title: 'Applications',
      value: stats.applications,
      icon: MessageSquare,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      href: '/admin/applications',
    },
  ]

  const quickActions = [
    { title: 'Create Page', href: '/admin/pages', icon: FileText },
    { title: 'Add Agent', href: '/admin/agents', icon: Users },
    { title: 'Add Lender', href: '/admin/lenders', icon: Building2 },
    { title: 'Update Rates', href: '/admin/rates', icon: TrendingUp },
  ]

  if (loading) {
    return (
      <AdminLayout title="Dashboard">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Activity className="w-8 h-8 animate-pulse text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
          <h2 className="text-2xl font-bold mb-2">Welcome to approvU Admin</h2>
          <p className="text-primary-foreground/90">
            Manage your mortgage website content, agents, lenders, and more from this central dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {statCards.map((stat) => (
            <Link key={stat.title} href={stat.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    View all
                    <ArrowUpRight className="w-3 h-3" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Pages</CardTitle>
              <CardDescription>Latest pages added to your site</CardDescription>
            </CardHeader>
            <CardContent>
              {recentPages.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPages.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell className="font-medium">
                          <Link
                            href={`/admin/pages?id=${page.id}`}
                            className="hover:underline"
                          >
                            {page.title}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              page.status === 'published'
                                ? 'default'
                                : page.status === 'draft'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {page.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {format(new Date(page.created_at), 'MMM d, yyyy')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No pages yet. Create your first page to get started.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.href}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 h-auto py-3"
                    >
                      <action.icon className="w-5 h-5" />
                      <span>{action.title}</span>
                      <Plus className="w-4 h-4 ml-auto" />
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Contact Support */}
              <div className="mt-6 p-4 rounded-lg bg-muted">
                <h4 className="font-medium mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get assistance with managing your content or technical issues.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Platform health and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-medium">Database</p>
                  <p className="text-xs text-muted-foreground">Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-medium">API</p>
                  <p className="text-xs text-muted-foreground">Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-medium">Authentication</p>
                  <p className="text-xs text-muted-foreground">Operational</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
