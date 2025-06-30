"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import {
  Calendar,
  User,
  Users,
  Globe,
  Rocket,
  Car,
  Dna,
  Play,
} from "lucide-react";
import { Film } from "@/types/types";

type FilmCardProps = {
  film: Film;
  index: number;
};

export function FilmCard({ film, index }: FilmCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTrilogyInfo = (episodeId: number) => {
    if (episodeId >= 1 && episodeId <= 3) {
      return { name: "Prequels", color: "bg-blue-500" };
    } else if (episodeId >= 4 && episodeId <= 6) {
      return { name: "Original Trilogy", color: "bg-yellow-500" };
    } else if (episodeId >= 7 && episodeId <= 9) {
      return { name: "Sequels", color: "bg-red-500" };
    }
    return { name: "Standalone", color: "bg-gray-500" };
  };

  const getEpisodeRoman = (episodeId: number) => {
    const romanNumerals = [
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ];
    return romanNumerals[episodeId] || episodeId.toString();
  };

  const truncateOpeningCrawl = (text: string, maxLength = 150) => {
    const cleanText = text.replace(/\r\n/g, " ").replace(/\s+/g, " ").trim();
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength) + "...";
  };

  const trilogy = getTrilogyInfo(film.episode_id);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                Episode {getEpisodeRoman(film.episode_id)}
              </Badge>
              <Badge className={`${trilogy.color} text-white text-xs`}>
                {trilogy.name}
              </Badge>
            </div>
            <CardTitle className="text-xl font-bold text-white leading-tight">
              {film.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Opening Crawl Preview */}
        <div className="transition-transform duration-300">
          <div className="flex items-start gap-2 mb-2">
            <Play className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-slate-300">Opening crawl:</span>
          </div>
          <p className="text-sm text-slate-400 italic leading-relaxed">
            "{truncateOpeningCrawl(film.opening_crawl)}"
          </p>
        </div>

        <Separator className="bg-slate-700" />

        {/* Director and Release Info */}
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="transition-transform duration-300 delay-100">
            <div className="flex items-center gap-2 mb-1">
              <User className="h-4 w-4 text-slate-400" />
              <span className="text-slate-300">Director:</span>
            </div>
            <p className="text-white font-medium">{film.director}</p>
          </div>

          <div className="transition-transform duration-300 delay-125">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span className="text-slate-300">Release date:</span>
            </div>
            <p className="text-white font-medium">
              {formatDate(film.release_date)}
            </p>
          </div>
        </div>

        <Separator className="bg-slate-700 group-hover:bg-[#637278]/30 transition-colors duration-300" />

        {/* Producer */}
        <div className="transition-transform duration-300 delay-150">
          <div className="text-slate-400 text-sm mb-1">Producer(s)</div>
          <p className="text-white font-medium text-sm">
            {film.producer.split(",")[0]}
            {film.producer.split(",").length > 1 && (
              <span className="text-slate-400">
                {" "}
                +{film.producer.split(",").length - 1} more
              </span>
            )}
          </p>
        </div>

        <Separator className="bg-slate-700" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{film.characters.length} characters</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-3 w-3" />
            <span>{film.planets.length} planets</span>
          </div>
          <div className="flex items-center gap-1">
            <Rocket className="h-3 w-3" />
            <span>{film.starships.length} starships</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-3 w-3" />
            <span>{film.vehicles.length} vehicles</span>
          </div>
        </div>

        {/* Species count */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Dna className="h-3 w-3" />
          <span>{film.species.length} different species</span>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-2 right-2 opacity-0">
          <div className="w-2 h-2 bg-[#637278] rounded-full animate-pulse" />
        </div>
      </CardContent>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#637278]/0" />
    </Card>
  );
}
