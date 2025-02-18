
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

const Word = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-4">
            <span className="text-3xl">始める</span>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              <Volume2 className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium text-muted-foreground">Romaji</div>
            <div className="text-lg">hajimeru</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">English</div>
            <div className="text-lg">to begin</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Word;
