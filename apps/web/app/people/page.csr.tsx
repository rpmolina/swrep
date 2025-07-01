"use client";

import {
  FilterConfig,
  MinimalResource,
  PeopleFilters,
  Person,
  Species,
} from "@/types/types";
import ResourceView from "@/components/resource-view";
import { filterPeople } from "@/lib/filterStrategies";
import { PersonCard } from "@/components/person-card";
import Link from "next/link";
import { extractId } from "@/lib/extract-id";

type PeopleContentViewProps = {
  initialResources: Person[];
  filterConfig: FilterConfig;
  planets: MinimalResource[];
  species: MinimalResource[];
};

export default function PeopleContentView({
  initialResources,
  filterConfig,
  planets,
  species,
}: PeopleContentViewProps) {
  return (
    <ResourceView<Person, PeopleFilters>
      initialResources={initialResources}
      filterConfig={filterConfig}
      searchByProp="name"
      initialFilters={{
        gender: "",
        hair_color: "",
        skin_color: "",
        eye_color: "",
      }}
      filtersTitle="People filters"
      filterStrategy={filterPeople}
      renderContent={(filteredPeople) => {
        return filteredPeople.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No people found with the applied filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredPeople.map((person, index) => (
              <Link
                href={`/coming-soon?from=/people/${extractId(person.url)}`}
                key={person.url}
                className="w-full"
              >
                <PersonCard
                  key={person.url}
                  person={person}
                  index={index}
                  planets={planets}
                  species={species}
                />
              </Link>
            ))}
          </div>
        );
      }}
    />
  );
}
