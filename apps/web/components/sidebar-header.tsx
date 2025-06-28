"use client";

import Link from "next/link";
import { Globe } from "lucide-react";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@workspace/ui/components/sidebar";

interface AppSidebarHeaderProps {
  title?: string;
  subtitle?: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function AppSidebarHeader({
  title = "SWAPI Explorer",
  subtitle = "Star Wars Database",
  href = "/",
  icon: Icon = Globe,
}: AppSidebarHeaderProps) {
  return (
    <SidebarHeader className="border-slate-800">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            asChild
            className="hover:bg-slate-800/50 transition-colors duration-200"
          >
            <Link href={href} className="group">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 text-slate-900 group-hover:scale-105 transition-transform duration-200">
                <Icon className="size-5" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {title}
                </span>
                <span className="truncate text-xs text-slate-400">
                  {subtitle}
                </span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarSeparator className="bg-slate-800" />
    </SidebarHeader>
  );
}
