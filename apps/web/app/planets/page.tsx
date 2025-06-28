import { PlanetContent } from "@/app/planets/page.csr";
import { Planet } from "./types";
import { Header } from "@/components/header";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empty-state";

type PlanetFetchResponse = {
  planets: Planet[];
  error?: string;
};

async function fetchPlanets(): Promise<PlanetFetchResponse> {
  try {
    const response = await fetch("http://localhost:3001/planets", {
      // cache for 1 hour for better performance
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return { planets: (await response.json()) as Planet[] };
  } catch (error) {
    console.error("Error fetching planets:", error);
    return { planets: [], error: "Error fetching planets" };
  }
}

export default async function PlanetsPage() {
  const response = await fetchPlanets();

  const isError = response.error;
  const isEmpty = response.planets.length === 0;
  const showContent = !isError && !isEmpty;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        {isError && <ErrorState />}
        {isEmpty && <EmptyState />}
        {showContent && <PlanetContent initialPlanets={response.planets} />}
      </div>
    </div>
  );
}
