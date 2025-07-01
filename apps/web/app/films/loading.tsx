import { Header } from "@/components/header";
import { LoadingState } from "@/components/loading-state";

export default function FilmsLoading() {
  return (
    <div>
      <Header
        title="Star Wars Films"
        description="Explore the Star Wars universe and discover the films that shaped it"
      />
      <LoadingState />
    </div>
  );
}
