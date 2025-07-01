import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@workspace/ui/components/badge";
import {
  fetchPeople,
  fetchPlanetById,
  fetchPlanets,
  fetchFilms,
} from "@/services/services";
import { getFilmTitles, getResidentNames } from "./utils";
import { PlanetImagePlaceholder } from "@/app/planets/[id]/components/planet-image-placeholder";
import { PhysicalCharacteristics } from "./components/physical-characteristics";
import { ResidentsAndFilms } from "./components/ResidentsAndFilms";
import PlanetDetailHeader from "./components/planet-detail-header";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const planets = await fetchPlanets();

  return planets.map((planet) => {
    const id = planet.url.split("/").pop();

    return {
      id,
    };
  });
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const planet = await fetchPlanetById(params.id);

  if (!planet) {
    return {
      title: "Planet not found - SWAPI Explorer",
    };
  }

  return {
    title: `${planet.name} - Star Wars Planets | SWAPI Explorer`,
    description: `Discover ${planet.name}, a ${planet.climate} planet with ${planet.terrain}. Population: ${planet.population}. Appears in ${planet.films.length} Star Wars films.`,
    openGraph: {
      title: `${planet.name} - Star Wars`,
      description: `${planet.climate} planet with ${planet.terrain}`,
      type: "article",
    },
  };
}

// Main component (server)
export default async function PlanetDetailPage({ params }: PageProps) {
  const planet = await fetchPlanetById(params.id);
  const people = await fetchPeople({ fields: "name,url" });
  const films = await fetchFilms({ fields: "title,url" });

  if (!planet) {
    notFound();
  }

  const residents = getResidentNames(planet.residents, people);
  const filmTitles = getFilmTitles(planet.films, films);

  return (
    <div className="container mx-auto px-4 py-8">
      <PlanetDetailHeader planet={planet} />

      <PlanetImagePlaceholder name={planet.name} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PhysicalCharacteristics planet={planet} />
        <ResidentsAndFilms
          planet={planet}
          residents={residents}
          filmTitles={filmTitles}
        />
      </div>
    </div>
  );
}
