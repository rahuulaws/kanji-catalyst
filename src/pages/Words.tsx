
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Words = () => {
  const words = [
    { japanese: "始める", romaji: "hajimeru", english: "to begin", correct: 15, wrong: 3 },
    { japanese: "食べる", romaji: "taberu", english: "to eat", correct: 12, wrong: 2 },
    { japanese: "見る", romaji: "miru", english: "to see/watch", correct: 18, wrong: 1 },
    { japanese: "行く", romaji: "iku", english: "to go", correct: 20, wrong: 4 },
    { japanese: "来る", romaji: "kuru", english: "to come", correct: 16, wrong: 5 },
    { japanese: "話す", romaji: "hanasu", english: "to speak", correct: 14, wrong: 3 },
    { japanese: "聞く", romaji: "kiku", english: "to listen/hear", correct: 13, wrong: 4 },
    { japanese: "読む", romaji: "yomu", english: "to read", correct: 11, wrong: 2 },
    { japanese: "書く", romaji: "kaku", english: "to write", correct: 10, wrong: 3 },
    { japanese: "寝る", romaji: "neru", english: "to sleep", correct: 17, wrong: 1 },
    { japanese: "起きる", romaji: "okiru", english: "to wake up", correct: 9, wrong: 4 },
    { japanese: "帰る", romaji: "kaeru", english: "to return", correct: 12, wrong: 3 },
    { japanese: "遊ぶ", romaji: "asobu", english: "to play", correct: 8, wrong: 2 },
    { japanese: "飲む", romaji: "nomu", english: "to drink", correct: 14, wrong: 1 },
    { japanese: "買う", romaji: "kau", english: "to buy", correct: 11, wrong: 3 },
    { japanese: "走る", romaji: "hashiru", english: "to run", correct: 7, wrong: 4 },
    { japanese: "泳ぐ", romaji: "oyogu", english: "to swim", correct: 9, wrong: 2 },
    { japanese: "待つ", romaji: "matsu", english: "to wait", correct: 13, wrong: 1 },
    { japanese: "歩く", romaji: "aruku", english: "to walk", correct: 15, wrong: 2 },
    { japanese: "笑う", romaji: "warau", english: "to laugh", correct: 10, wrong: 3 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Words</h1>
      
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
            {words.map((word) => (
              <TableRow key={word.japanese}>
                <TableCell className="flex items-center space-x-2">
                  <span>{word.japanese}</span>
                  <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>{word.romaji}</TableCell>
                <TableCell>{word.english}</TableCell>
                <TableCell>{word.correct}</TableCell>
                <TableCell>{word.wrong}</TableCell>
              </TableRow>
            ))}
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

export default Words;
