import { Alert, AlertDescription } from "@workspace/ui/components/alert";
import { AlertCircle } from "lucide-react";
import { PlanetContent } from "@/app/planets/page.csr";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

// Función para obtener planetas desde tu API (SSR)
async function fetchPlanets(): Promise<Planet[]> {
  try {
    const response = await fetch("http://localhost:3001/planets", {
      // cache for 1 hour for better performance
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching planets:", error);
    return [];
  }
}

// Server Component principal (SSR)
export default async function PlanetsPage() {
  // Fetch de datos en el servidor
  const planets = await fetchPlanets();

  console.log("planets", planets);

  if (!planets || planets.length === 0) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Error al cargar los planetas desde la API. Asegúrate de que tu API
              esté ejecutándose en http://localhost:3000
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  // Renderizar contenido con datos del servidor
  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            Star Wars Planets
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore the far, far away galaxy and discover the worlds of the Star
            Wars universe
          </p>
        </div>

        <PlanetContent initialPlanets={planets} />
      </div>
    </div>
  );
}
