"use client";

import { Button } from "@workspace/ui/components/button";
import { Menu } from "lucide-react";

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="lg:hidden sticky top-0 z-30 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="flex items-center justify-between h-14 px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="text-slate-400 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-md flex items-center justify-center">
            <span className="text-xs font-bold text-slate-900">SW</span>
          </div>
          <span className="font-semibold text-white">SWAPI Explorer</span>
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
    </header>
  );
}
