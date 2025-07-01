import { Header } from "@/components/header";
import { LoadingState } from "@/components/loading-state";

export default function StarshipsLoading() {
  return (
    <div>
      <Header
        title="Star Wars Starships"
        description="Explore the Star Wars universe and discover the starships that shaped it"
      />
      <LoadingState />
    </div>
  );
}
