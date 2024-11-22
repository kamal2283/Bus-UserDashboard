"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Wallet, 
  Settings,
  Bus
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Trip History",
    icon: History,
    href: "/history",
  },
  {
    title: "Upcoming Trips",
    icon: Calendar,
    href: "/upcoming",
  },
  {
    title: "Balance",
    icon: Wallet,
    href: "/balance",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform duration-200",
        !isOpen && "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-1 p-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href ? "bg-accent" : "transparent"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}