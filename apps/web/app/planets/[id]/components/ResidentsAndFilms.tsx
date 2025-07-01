import { Planet } from "@/types/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { FilmIcon, Users } from "lucide-react";

export const ResidentsAndFilms = ({
  planet,
  residents,
  filmTitles,
}: {
  planet: Planet;
  residents: string[];
  filmTitles: string[];
}) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Users className="h-5 w-5 text-[#637278]" />
          Residents & Film Appearances
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Residents */}
        <div>
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
            <Users className="h-4 w-4" />
            Known residents ({residents.length})
          </div>
          {residents.length > 0 ? (
            <div className="space-y-2">
              {residents.map((resident, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg px-3 py-2 text-white text-sm hover:bg-slate-700/70 transition-colors"
                >
                  {resident}
                </div>
              ))}
              {planet.residents.length > 10 && (
                <div className="text-slate-400 text-sm">
                  +{planet.residents.length - 10} more residents
                </div>
              )}
            </div>
          ) : (
            <div className="text-slate-400 text-sm">No known residents</div>
          )}
        </div>

        <Separator className="bg-slate-700" />

        {/* Films */}
        <div>
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
            <FilmIcon className="h-4 w-4" />
            Appears in ({filmTitles.length} films)
          </div>
          {filmTitles.length > 0 ? (
            <div className="space-y-2">
              {filmTitles.map((film, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg px-3 py-2 text-white text-sm hover:bg-slate-700/70 transition-colors"
                >
                  {film}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-slate-400 text-sm">
              Does not appear in known films
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
