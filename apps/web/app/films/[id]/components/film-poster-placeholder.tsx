import { Card } from "@workspace/ui/components/card";
import { Film } from "@/types/types";
import { Play } from "lucide-react";

export default function FilmPosterPlaceholder({ film }: { film: Film }) {
  return (
    <div className="mb-8">
      <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <div className="h-16 w-16 text-[#637278] mx-auto mb-4" />
            <Play className="h-16 w-16 text-[#637278] mx-auto mb-4" />
            <p className="text-slate-400">Film poster</p>
            <p className="text-slate-500 text-sm">{film.title}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
