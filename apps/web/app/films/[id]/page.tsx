import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import {
  Calendar,
  User,
  Users,
  Globe,
  Rocket,
  Play,
  Dna,
  Car,
  Star,
} from "lucide-react";
import {
  fetchFilmById,
  fetchFilms,
  fetchPeople,
  fetchPlanets,
  fetchStarships,
} from "@/services/services";
import { extractId } from "@/lib/extract-id";
import {
  getCharacterNames,
  getEpisodeRoman,
  getPlanetNames,
  getStarshipNames,
  formatDate,
} from "./utils";
import FilmDetailHeader from "./components/film-detail-header";
import FilmPosterPlaceholder from "./components/film-poster-placeholder";
import FilmDetails from "./components/fil-details";
import FilmRelations from "./components/film-relations";
import FilmExtra from "./components/film-extra";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const films = await fetchFilms();

  return films.map((film) => ({
    id: extractId(film.url),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const film = await fetchFilmById(params.id);

  if (!film) {
    return {
      title: "Film not found - SWAPI Explorer",
    };
  }

  return {
    title: `${film.title} - Star Wars Films | SWAPI Explorer`,
    description: `Discover ${film.title} (Episode ${film.episode_id}), directed by ${film.director}. Released in ${new Date(film.release_date).getFullYear()}. Features ${film.characters.length} characters across ${film.planets.length} planets.`,
    openGraph: {
      title: `${film.title} - Star Wars`,
      description: `Episode ${film.episode_id} - Directed by ${film.director}`,
      type: "article",
    },
  };
}

// Main component (server)
export default async function FilmDetailPage(props: PageProps) {
  const params = await props.params;
  const film = await fetchFilmById(params.id);
  const people = await fetchPeople({ fields: "name,url" });
  const planets = await fetchPlanets({ fields: "name,url" });
  const starships = await fetchStarships({ fields: "name,url" });
  const allFilms = await fetchFilms();

  if (!film) {
    notFound();
  }

  const characters = getCharacterNames(film.characters, people);
  const planetsNames = getPlanetNames(film.planets, planets);
  const starshipsNames = getStarshipNames(film.starships, starships);
  const currentIndex = Number.parseInt(params.id) - 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <FilmDetailHeader film={film} />

      <FilmPosterPlaceholder film={film} />

      <FilmDetails
        film={film}
        characters={characters}
        planets={planetsNames}
        starships={starshipsNames}
      />

      <FilmRelations
        film={film}
        characterNames={characters}
        planetNames={planetsNames}
        starshipNames={starshipsNames}
      />

      <FilmExtra film={film} />
    </div>
  );
}
