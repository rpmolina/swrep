import { Header } from "@/components/header";
import { LoadingState } from "@/components/loading-state";

export default function PeopleLoading() {
  return (
    <div>
      <Header
        title="Star Wars People"
        description="Explore the far, far away galaxy and discover the people of the Star Wars universe"
      />
      <LoadingState />
    </div>
  );
}
