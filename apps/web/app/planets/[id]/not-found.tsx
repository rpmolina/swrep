import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { AlertCircle, ArrowLeft, Globe } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          {/* Error Icon */}
          <div className="relative">
            <Globe className="h-24 w-24 text-slate-600" />
            <AlertCircle className="h-12 w-12 text-red-500 absolute -bottom-2 -right-2" />
          </div>

          {/* Error Card */}
          <Card className="bg-slate-800/50 border-slate-700 max-w-md w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Planet not found
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-slate-300">
                The planet you're looking for doesn't exist in our galaxy
                database.
              </p>
              <p className="text-slate-400 text-sm">
                It might have been destroyed by the Death Star... 💥
              </p>

              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to planets list
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center text-slate-400 text-sm max-w-md">
            <p>
              If you think this is an error, you can explore all available
              planets in our database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
