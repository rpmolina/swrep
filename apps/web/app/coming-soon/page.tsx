"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { useSearchParams } from "next/navigation";

export default function ComingSoonPage() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/coming-soon";

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Card className="group hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
              {from}
            </CardTitle>
            <Badge
              variant="outline"
              className="text-xs bg-orange-400 border-orange-500 hover:bg-orange-500 hover:border-orange-600 text-black"
            >
              Coming Soon
            </Badge>
          </div>
        </CardHeader>
        <Separator className="bg-slate-700" />

        <CardContent className="space-y-4">
          <p className="text-white">
            This page is coming soon. We're building amazing things for this
            page.
          </p>

          <p className="text-white">
            You can check out details pages in <code>/planets/[id]</code>
            for now. Please check back later.
          </p>

          <Separator className="bg-slate-700" />

          <div className="flex justify-between text-xs text-slate-400">
            you can check out details pages in <code>/planets/[id]</code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
