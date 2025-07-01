import { Badge } from "@workspace/ui/components/badge";
import { Film } from "@/types/types";
import { getEpisodeRoman } from "../utils";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const FilmDetailHeader = ({ film }: { film: Film }) => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Badge variant="outline" className="text-slate-300 border-slate-600">
          Episode {getEpisodeRoman(film.episode_id)}
        </Badge>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
        {film.title}
      </h1>
      <p className="text-slate-400">Directed by {film.director}</p>
    </div>
  );
};

export default FilmDetailHeader;
