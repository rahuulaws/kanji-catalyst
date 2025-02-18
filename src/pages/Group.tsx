
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Group = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Core Verbs</CardTitle>
        </CardHeader>
      </Card>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Japanese</TableHead>
              <TableHead>Romaji</TableHead>
              <TableHead>English</TableHead>
              <TableHead># Correct</TableHead>
              <TableHead># Wrong</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center space-x-2">
                <span>始める</span>
                <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell>hajimeru</TableCell>
              <TableCell>to begin</TableCell>
              <TableCell>15</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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

export default Group;
