"use client";

import type * as React from "react";
import Link from "next/link";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

// Tipos para el componente
interface SidebarNavItemProps {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  pathname?: string;
}

export function SidebarNavItem({
  title,
  description,
  url,
  icon: Icon,
  pathname,
}: SidebarNavItemProps) {
  const isExternal = url.startsWith("http") || url.startsWith("//");

  const isActive = !isExternal && pathname === url;

  const buttonClassName = `
    group transition-all duration-200 hover:bg-slate-800/50
    ${
      isActive
        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/25"
        : "text-slate-300 hover:text-yellow-400"
    }
  `;

  const iconClassName = `size-5 transition-colors duration-300 ${
    isActive ? "text-yellow-400" : "text-slate-400 group-hover:text-[#637278]"
  }`;

  const content = (
    <>
      <Icon className={iconClassName} />
      <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
        <div className="font-medium truncate">{title}</div>
        <div className="text-xs text-slate-400 truncate">{description}</div>
      </div>
    </>
  );

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={title}
        className={buttonClassName}
      >
        {isExternal ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full"
          >
            {content}
          </a>
        ) : (
          <Link href={url} className="flex items-center gap-3 w-full">
            {content}
          </Link>
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
