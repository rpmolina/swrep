import { Film } from "@/types/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { Globe, Rocket, Star, Users } from "lucide-react";
import { formatDate } from "../utils";

type FilmExtraProps = {
  film: Film;
};
export default async function FilmExtra({ film }: FilmExtraProps) {
  return (
    <div className="mt-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Star className="h-5 w-5 text-[#637278]" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-slate-400 text-sm mb-2">
                Species Featured
              </div>
              <div className="text-white font-medium">
                {film.species.length} different species
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-2">
                Created in Database
              </div>
              <div className="text-white font-medium">
                {formatDate(film.created)}
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-2">Last Updated</div>
              <div className="text-white font-medium">
                {formatDate(film.edited)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
