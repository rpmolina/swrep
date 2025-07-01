"use client";

import { ErrorState } from "@/components/error-state";
import { Header } from "@/components/header";

export default function PlanetsErrorPage() {
  return (
    <div>
      <Header
        title="Star Wars Planets"
        description="Explore the far, far away galaxy and discover the worlds of the Star Wars universe"
      />
      <ErrorState />
    </div>
  );
}
