import { Alert, AlertDescription } from "@workspace/ui/components/alert";
import { AlertCircle } from "lucide-react";

type EmptyStateProps = {
  message?: string;
};

const defaultMessage =
  "We don't have any resources to show. Please try again later.";

export function EmptyState({ message = defaultMessage }: EmptyStateProps) {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Alert variant="default">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
