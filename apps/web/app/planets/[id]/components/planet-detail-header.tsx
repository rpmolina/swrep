import { Badge } from "@workspace/ui/components/badge";
import { getClimateColor } from "../utils";
import { Planet } from "@/types/types";

export default async function PlanetDetailHeader({
  planet,
}: {
  planet: Planet;
}) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
        {planet.name}
      </h1>
      <div className="flex items-center justify-center gap-2 mb-4">
        <Badge className={`${getClimateColor(planet.climate)} text-white`}>
          {planet.climate}
        </Badge>
      </div>
    </div>
  );
}
