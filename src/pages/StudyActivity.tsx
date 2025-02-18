
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const StudyActivity = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Adventure MUD</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <img
            src="/placeholder.svg"
            alt="Activity thumbnail"
            className="aspect-video object-cover rounded-md"
          />
          <p className="text-muted-foreground">
            An immersive text adventure game for learning Japanese.
          </p>
          <Button onClick={() => window.open('http://localhost:8081?group_id=4', '_blank')}>
            <Play className="h-4 w-4 mr-2" />
            Launch Activity
          </Button>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Recent Sessions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="grid gap-2">
                <div className="font-semibold">Core Verbs Group</div>
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
      </div>
    </div>
  );
};

export default StudyActivity;
