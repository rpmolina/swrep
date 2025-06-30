"use client";

import type * as React from "react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarRail,
  SidebarSeparator,
} from "@workspace/ui/components/sidebar";
import { navigationConfig } from "@/lib/navigation-config";
import { SidebarSection } from "./sidebar-section";
import { AppSidebarHeader } from "./sidebar-header";
import { AppSidebarFooter } from "./sidebar-footer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className="bg-slate-900/95 backdrop-blur-sm border-slate-800"
      {...props}
    >
      <AppSidebarHeader />

      <SidebarContent>
        <SidebarSection
          title="Explore"
          items={navigationConfig.navMain}
          pathname={pathname}
        />

        <SidebarSeparator className="bg-slate-800" />

        <SidebarSection
          title="Links"
          items={navigationConfig.navSecondary}
          pathname={pathname}
        />
      </SidebarContent>

      <SidebarSeparator className="bg-slate-800" />

      <AppSidebarFooter />

      <SidebarRail className="hover:bg-[#637278]/20 transition-colors duration-200" />
    </Sidebar>
  );
}
