import { Film } from "@/types/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { Globe, Rocket, Users } from "lucide-react";

type FilmRelationsProps = {
  film: Film;
  characterNames: string[];
  planetNames: string[];
  starshipNames: string[];
};
export default async function FilmRelations({
  film,
  characterNames,
  planetNames,
  starshipNames,
}: FilmRelationsProps) {
  return (
    <div className="py-8">
      {/* Characters & Locations */}
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Characters */}
        <Card className="bg-slate-800/50 border-slate-700 col-span-2">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-[#637278]" />
              Main Characters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {characterNames.map((character, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg px-3 py-2 text-white text-sm hover:bg-slate-700/70 transition-colors"
                >
                  {character}
                </div>
              ))}
            </div>
          </CardContent>
          <Separator className="bg-slate-700" />
          <CardFooter>
            {film.characters.length > 15 && (
              <div className="text-slate-400 text-sm text-center">
                +{film.characters.length - 15} more characters
              </div>
            )}
          </CardFooter>
        </Card>
        {/* Planets */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#637278]" />
              Planets and Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {planetNames.map((planet, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg px-3 py-2 text-white text-sm hover:bg-slate-700/70 transition-colors"
                >
                  {planet}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Starships */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Rocket className="h-5 w-5 text-[#637278]" />
              Starships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {starshipNames.map((starship, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg px-3 py-2 text-white text-sm hover:bg-slate-700/70 transition-colors"
                >
                  {starship}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
