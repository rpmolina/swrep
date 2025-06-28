"use client";

import type * as React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@workspace/ui/components/sidebar";
import { SidebarNavItem } from "./sidebar-nav-item";

// Tipos para el item de navegación
interface NavigationItem {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Props del componente SidebarSection
interface SidebarSectionProps {
  title: string;
  items: NavigationItem[];
  pathname?: string;
}

export function SidebarSection({
  title,
  items,
  pathname,
}: SidebarSectionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
        {title}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-1">
          {items.map((item) => (
            <SidebarNavItem
              key={item.title}
              title={item.title}
              description={item.description}
              url={item.url}
              icon={item.icon}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
