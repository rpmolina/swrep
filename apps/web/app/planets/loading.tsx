import { Header } from "@/components/header";
import { LoadingState } from "@/components/loading-state";

export default function PlanetsLoading() {
  return (
    <div>
      <Header
        title="Star Wars Planets"
        description="Explore the far, far away galaxy and discover the worlds of the Star Wars universe"
      />
      <LoadingState />
    </div>
  );
}
