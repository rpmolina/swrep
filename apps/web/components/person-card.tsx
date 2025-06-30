"use client";

import {
  User,
  Ruler,
  Weight,
  Eye,
  Calendar,
  Users,
  Rocket,
  Car,
  Globe,
  Dna,
} from "lucide-react";
import { MinimalResource, Person } from "@/types/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";

type PersonCardProps = {
  person: Person;
  index: number;
  planets: MinimalResource[];
  species: MinimalResource[];
};

export function PersonCard({
  person,
  index,
  planets,
  species,
}: PersonCardProps) {
  const getGenderColor = (gender: string) => {
    const genderColors: { [key: string]: string } = {
      male: "bg-blue-500",
      female: "bg-pink-500",
      hermaphrodite: "bg-purple-500",
      "n/a": "bg-gray-500",
      unknown: "bg-slate-500",
    };
    return genderColors[gender.toLowerCase()] || "bg-slate-500";
  };

  const getGenderLabel = (gender: string) => {
    const genderLabels: { [key: string]: string } = {
      male: "Male",
      female: "Female",
      hermaphrodite: "Hermaphrodite",
      "n/a": "N/A",
      unknown: "Unknown",
    };
    return genderLabels[gender.toLowerCase()] || gender;
  };

  const formatHeight = (height: string) => {
    if (height === "unknown" || height === "n/a") return "Unknown";
    const num = Number.parseInt(height);
    if (isNaN(num)) return height;
    return `${num} cm`;
  };

  const formatMass = (mass: string) => {
    if (mass === "unknown" || mass === "n/a") return "Unknown";
    const num = Number.parseInt(mass);
    if (isNaN(num)) return mass;
    return `${num} kg`;
  };

  const getHomeworldName = (homeworldUrl: string) => {
    const homeworld = planets.find((planet) => planet.url === homeworldUrl);
    if (!homeworld) {
      return "Unknown";
    }
    return homeworld.name;
  };

  const getSpeciesNames = (speciesUrls: string[]) => {
    const speciesNames = speciesUrls.map((url) => {
      const name = species.find((s: MinimalResource) => s.url === url);
      return name?.name || "Unknown";
    });
    return speciesNames.join(", ");
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {person.name}
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            #{index + 1}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        {/* Gender */}
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-300">Gender:</span>
          <Badge
            className={`${getGenderColor(person.gender)} text-white text-xs`}
          >
            {getGenderLabel(person.gender)}
          </Badge>
        </div>

        {/* Homeworld and Species */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-300">Homeworld:</span>
            <span className="text-sm text-white font-medium">
              {getHomeworldName(person.homeworld)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Dna className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-300">Species:</span>
            <span className="text-sm text-white font-medium">
              {getSpeciesNames(person.species)}
            </span>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Ruler className="h-3 w-3" />
              <span>Height</span>
            </div>
            <p className="text-white font-medium">
              {formatHeight(person.height)}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Weight className="h-3 w-3" />
              <span>Weight</span>
            </div>
            <p className="text-white font-medium">{formatMass(person.mass)}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Calendar className="h-3 w-3" />
              <span>Birth year</span>
            </div>
            <p className="text-white font-medium">
              {person.birth_year === "unknown" ? "Unknown" : person.birth_year}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-slate-400">Hair color</div>
            <p className="text-white font-medium capitalize">
              {person.hair_color === "n/a" ? "N/A" : person.hair_color}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Eye className="h-3 w-3" />
              <span>Eye color</span>
            </div>
            <p className="text-white font-medium capitalize">
              {person.eye_color}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-slate-400">Skin color</div>
            <p className="text-white font-medium capitalize">
              {person.skin_color}
            </p>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Rocket className="h-3 w-3" />
            {person.starships.length} starships
          </span>
          <span className="flex items-center gap-1">
            <Car className="h-3 w-3" />
            {person.vehicles.length} vehicles
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {person.films.length} films
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
