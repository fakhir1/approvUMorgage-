"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut, loading } = useAuth();

  const isActivePath = (href: string, submenu?: any[]) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    if (submenu && submenu.some(item => pathname?.startsWith(item.href))) return true;
    return false;
  };

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Solutions", 
      href: "/mortgage/",
      submenu: [
        { name: "Purchase Mortgage", href: "/mortgage/purchase/" },
        { name: "Refinance Mortgage", href: "/mortgage/refinance/" },
        { name: "Pre-Approval", href: "/mortgage/approval/" }
      ]
    },
    { 
      name: "Programs", 
      href: "/mortgage/first-time-buyer/",
      submenu: [
        { name: "First-Time Buyer", href: "/mortgage/first-time-buyer/" },
        { name: "Self-Employed", href: "/mortgage/self-employed/" },
        { name: "Bad Credit", href: "/mortgage/bad-credit/" },
        { name: "Investor", href: "/mortgage/investor/" },
        { name: "Professional Mortgages", href: "/mortgage/professional/" },
        { name: "New to Canada", href: "/mortgage/newcomer/" }
      ]
    },
    { 
      name: "Resources", 
      href: "/mortgage/rates/",
      submenu: [
        { name: "Calculators", href: "/mortgage/calculators/" },
        { name: "Rates", href: "/mortgage/rates/" },
        { name: "Guides", href: "/mortgage/guides/" }
      ]
    },
    { name: "About", href: "/about/" },
    { name: "Agents", href: "/agents/" },
    { name: "Contact", href: "/contact/" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              approvU
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    isActivePath(item.href, item.submenu) 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            pathname === subItem.href
                              ? "text-primary font-medium bg-gray-50"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Section (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {!loading && user ? (
              // Authenticated User Dropdown
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-50 transition border border-gray-300"
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">
                    {user.user_metadata?.username || user.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      href="/mortgage/approval"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      My Applications
                    </Link>
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={async () => {
                        setUserDropdownOpen(false)
                        await signOut()
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Unauthenticated Buttons
              <>
                <Link href="/auth">
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition font-medium">
                    Sign In
                  </button>
                </Link>
                <Link href="/auth">
                  <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition font-medium">
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`block font-medium transition-colors py-2 ${
                        isActivePath(item.href, item.submenu)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="p-2 text-gray-400"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`} />
                      </button>
                    )}
                  </div>
                  {item.submenu && activeDropdown === item.name && (
                    <div className="ml-4 pb-2 space-y-1 border-l-2 border-gray-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block pl-4 py-2 text-sm transition-colors ${
                            pathname === subItem.href
                              ? "text-primary font-medium"
                              : "text-gray-600 hover:text-primary"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Section */}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                {!loading && user ? (
                  // Authenticated User Menu
                  <>
                    <div className="px-4 py-2 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700 font-medium">
                          {user.user_metadata?.username || user.email?.split('@')[0] || 'User'}
                        </span>
                      </div>
                    </div>
                    <Link href="/mortgage/approval" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition rounded-md">
                        My Applications
                      </button>
                    </Link>
                    <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition rounded-md">
                        Dashboard
                      </button>
                    </Link>
                    <button
                      onClick={async () => {
                        await signOut()
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition rounded-md flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  // Unauthenticated Buttons
                  <>
                    <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition font-medium">
                        Sign In
                      </button>
                    </Link>
                    <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition font-medium">
                        Get Started
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
