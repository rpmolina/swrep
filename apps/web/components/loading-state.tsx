import Loader from "./loader";

export function LoadingState() {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <Loader className="w-16 h-16" />
      </div>
    </div>
  );
}
