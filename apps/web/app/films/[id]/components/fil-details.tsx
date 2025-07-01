import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Play,
  User,
  Calendar,
  Users,
  Globe,
  Rocket,
  Car,
  Dna,
} from "lucide-react";
import { Separator } from "@workspace/ui/components/separator";
import { formatDate, getEpisodeRoman } from "../utils";
import { Film } from "@/types/types";

type FilmDetailsProps = {
  film: Film;
  characters: string[];
  planets: string[];
  starships: string[];
};

export default function FilmDetails({
  film,
  characters,
  planets,
  starships,
}: FilmDetailsProps) {
  return (
    <div className="py-8">
      {/* Opening Crawl & Film Info */}
      <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Play className="h-5 w-5 text-[#637278]" />
            Opening Crawl
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Opening Crawl */}
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <div className="text-yellow-400 text-center mb-4 font-bold text-lg">
              Episode {getEpisodeRoman(film.episode_id)}
            </div>
            <div className="text-yellow-400 text-center mb-6 text-2xl font-bold">
              {film.title.toUpperCase()}
            </div>
            <div className="text-yellow-300 leading-relaxed text-center italic">
              {film.opening_crawl.replace(/\r\n/g, "\n\n")}
            </div>
          </div>

          <Separator className="bg-slate-700" />

          {/* Film Details */}
          <div className="flex flex-row justify-around flex-wrap">
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <User className="h-4 w-4" />
                Director
              </div>
              <div className="text-white font-medium text-lg">
                {film.director}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <Calendar className="h-4 w-4" />
                Release Date
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                {formatDate(film.release_date)}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <Users className="h-4 w-4" />
                Producer(s)
              </div>
              <div className="text-white font-medium">{film.producer}</div>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          {/* Statistics */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <User className="h-5 w-5 text-[#637278]" />
                <div className="text-2xl font-bold text-white">
                  {film.characters.length}
                </div>
              </div>

              <div className="text-slate-400 text-sm">Characters</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Globe className="h-5 w-5 text-[#637278]" />
                <div className="text-2xl font-bold text-white">
                  {film.planets.length}
                </div>
              </div>

              <div className="text-slate-400 text-sm">Planets</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Rocket className="h-5 w-5 text-[#637278]" />
                <div className="text-2xl font-bold text-white">
                  {film.starships.length}
                </div>
              </div>
              <div className="text-slate-400 text-sm">Starships</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Car className="h-5 w-5 text-[#637278]" />
                <div className="text-2xl font-bold text-white">
                  {film.vehicles.length}
                </div>
              </div>
              <div className="text-slate-400 text-sm">Vehicles</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Dna className="h-5 w-5 text-[#637278]" />
                <div className="text-2xl font-bold text-white">
                  {film.species.length}
                </div>
              </div>
              <div className="text-slate-400 text-sm">Species</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
