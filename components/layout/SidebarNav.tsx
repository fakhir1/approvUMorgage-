"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavItem {
  label: string;
  href: string;
  children?: SidebarNavItem[];
}

interface SidebarNavProps {
  items: SidebarNavItem[];
  title?: string;
}

export default function SidebarNav({ items, title }: SidebarNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <aside className="w-full lg:w-64 bg-white rounded-lg border p-6 sticky top-20">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      )}
      <nav className="space-y-1">
        {items.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive(item.href)
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`}
            >
              {item.label}
            </Link>
            {item.children && isActive(item.href) && (
              <div className="ml-4 mt-1 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-3 py-2 rounded-md text-sm transition ${
                      pathname === child.href
                        ? 'text-primary-700 font-medium'
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
