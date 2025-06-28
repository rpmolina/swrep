"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";

interface AppSidebarFooterProps {
  collapseText?: string;
  expandIcon?: React.ComponentType<{ className?: string }>;
  collapseIcon?: React.ComponentType<{ className?: string }>;
}

export function AppSidebarFooter({
  collapseText = "Collapse sidebar",
  expandIcon: ExpandIcon = ChevronRight,
  collapseIcon: CollapseIcon = ChevronLeft,
}: AppSidebarFooterProps) {
  const { toggleSidebar, open } = useSidebar();

  return (
    <SidebarFooter className="border-slate-800">
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex justify-between"
              onClick={toggleSidebar}
            >
              {open ? (
                <>
                  <span>{collapseText}</span>
                  <CollapseIcon />
                </>
              ) : (
                <ExpandIcon />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarFooter>
  );
}
