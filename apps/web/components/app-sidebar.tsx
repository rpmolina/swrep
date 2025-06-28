"use client";

import type * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Rocket,
  Car,
  Users,
  Film,
  Zap,
  Github,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@workspace/ui/components/sidebar";

import { Badge } from "@workspace/ui/components/badge";

// Navigation data
const data = {
  navMain: [
    {
      title: "Planets",
      url: "/",
      icon: Globe,
      description: "Explore the worlds of Star Wars",
      isActive: true,
      available: true,
    },
    {
      title: "Ships",
      url: "/starships",
      icon: Rocket,
      description: "Discover the spaceships",
      isActive: false,
      available: true,
    },
    {
      title: "Vehicles",
      url: "/vehicles",
      icon: Car,
      description: "Know the terrestrial vehicles",
      isActive: false,
      available: true,
    },
    {
      title: "Characters",
      url: "/people",
      icon: Users,
      description: "Know the heroes and villains",
      isActive: false,
      available: true,
    },
    {
      title: "Movies",
      url: "/films",
      icon: Film,
      description: "Movie information",
      isActive: false,
      available: true,
    },
    {
      title: "Species",
      url: "/species",
      icon: Zap,
      description: "Different species",
      isActive: false,
      available: true,
    },
  ],
  navSecondary: [
    {
      title: "SWAPI API",
      url: "https://swapi.info",
      icon: ExternalLink,
      description: "SWAPI API Docs",
    },
    {
      title: "repo",
      url: "https://github.com/rpmolina/swarep",
      icon: Github,
      description: "View on GitHub",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  // Update active state based on current pathname
  const navMainWithActive = data.navMain.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }));

  return (
    <Sidebar
      collapsible="icon"
      className="bg-slate-900/95 backdrop-blur-sm border-slate-800"
      {...props}
    >
      <SidebarHeader className="border-slate-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-slate-800/50 transition-colors duration-200"
            >
              <Link href="/" className="group">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 text-slate-900 group-hover:scale-105 transition-transform duration-200">
                  <Globe className="size-5" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    SWAPI Explorer
                  </span>
                  <span className="truncate text-xs text-slate-400">
                    Star Wars Database
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator className="bg-slate-800" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            Explore
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navMainWithActive.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    {
                      <SidebarMenuButton
                        asChild
                        isActive={item.isActive}
                        tooltip={item.title}
                        className={`
                          group transition-all duration-200 hover:bg-slate-800/50
                          ${
                            item.isActive
                              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/25"
                              : "text-slate-300 hover:text-yellow-400"
                          }
                        `}
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-3 w-full"
                        >
                          <Icon
                            className={`size-5 transition-colors duration-300 ${
                              item.isActive
                                ? "text-yellow-400"
                                : "text-slate-400 group-hover:text-[#637278]"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-400 truncate group-data-[collapsible=icon]:hidden">
                              {item.description}
                            </div>
                          </div>
                          {item.isActive && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse flex-shrink-0 group-data-[collapsible=icon]:hidden" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    }
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-slate-800" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            Links
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {data.navSecondary.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className="group text-slate-300 hover:text-yellow-400 hover:bg-slate-800/50 transition-all duration-200"
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full"
                      >
                        <Icon className="size-5 text-slate-400 group-hover:text-[#637278] transition-colors duration-300" />
                        <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                          <div className="font-medium truncate">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400 truncate">
                            {item.description}
                          </div>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="bg-slate-800" />
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
                    <span>Collapse sidebar</span>
                    <ChevronLeft />
                  </>
                ) : (
                  <ChevronRight />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>

      <SidebarRail className="hover:bg-[#637278]/20 transition-colors duration-200" />
    </Sidebar>
  );
}
