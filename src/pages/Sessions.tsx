
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sessions = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Study Sessions</h1>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="grid gap-2">
              <div className="font-semibold">Adventure MUD - Core Verbs Group</div>
              <div className="text-sm text-muted-foreground">
                Start: 2024-02-20 10:30 AM
              </div>
              <div className="text-sm text-muted-foreground">
                End: 2024-02-20 11:00 AM
              </div>
              <div className="text-sm text-muted-foreground">
                25 review items
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <span className="text-sm">
          Page <strong>1</strong> of 3
        </span>
        <Button variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Sessions;
