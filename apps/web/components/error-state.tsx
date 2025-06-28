import { Alert, AlertDescription } from "@workspace/ui/components/alert";
import { AlertCircle } from "lucide-react";

type ErrorStateProps = {
  error?: string;
};

const defaultError =
  "We couldn't fetch the resources from the API. Please try again later.";

export function ErrorState({ error = defaultError }: ErrorStateProps) {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Alert variant="default">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
