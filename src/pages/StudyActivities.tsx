
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";

const StudyActivities = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Study Activities</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Adventure MUD</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg"
              alt="Activity thumbnail"
              className="aspect-video object-cover rounded-md"
            />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button onClick={() => window.open('http://localhost:8081?group_id=4', '_blank')}>
              <Play className="h-4 w-4 mr-2" />
              Launch
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StudyActivities;
