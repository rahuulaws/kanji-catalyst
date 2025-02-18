
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const Groups = () => {
  const groups = [
    { 
      id: 1,
      name: "Office Words",
      count: 10,
      words: [
        { japanese: "会議", romaji: "kaigi", english: "meeting", correct: 12, wrong: 2 },
        { japanese: "仕事", romaji: "shigoto", english: "work", correct: 15, wrong: 3 },
        { japanese: "電話", romaji: "denwa", english: "telephone", correct: 10, wrong: 1 },
        { japanese: "書類", romaji: "shorui", english: "documents", correct: 8, wrong: 4 },
        { japanese: "机", romaji: "tsukue", english: "desk", correct: 14, wrong: 2 },
        { japanese: "会社", romaji: "kaisha", english: "company", correct: 11, wrong: 3 },
        { japanese: "締切", romaji: "shimekiri", english: "deadline", correct: 7, wrong: 5 },
        { japanese: "上司", romaji: "joushi", english: "boss", correct: 9, wrong: 2 },
        { japanese: "同僚", romaji: "douryou", english: "colleague", correct: 13, wrong: 1 },
        { japanese: "名刺", romaji: "meishi", english: "business card", correct: 6, wrong: 4 }
      ]
    },
    {
      id: 2,
      name: "Cooking Words",
      count: 10,
      words: [
        { japanese: "料理", romaji: "ryouri", english: "cooking", correct: 14, wrong: 2 },
        { japanese: "野菜", romaji: "yasai", english: "vegetables", correct: 12, wrong: 3 },
        { japanese: "包丁", romaji: "houcho", english: "kitchen knife", correct: 8, wrong: 4 },
        { japanese: "鍋", romaji: "nabe", english: "pot", correct: 11, wrong: 2 },
        { japanese: "味噌", romaji: "miso", english: "miso", correct: 15, wrong: 1 },
        { japanese: "醤油", romaji: "shouyu", english: "soy sauce", correct: 13, wrong: 2 },
        { japanese: "炊飯器", romaji: "suihanki", english: "rice cooker", correct: 9, wrong: 3 },
        { japanese: "フライパン", romaji: "furaipan", english: "frying pan", correct: 10, wrong: 4 },
        { japanese: "レシピ", romaji: "resipi", english: "recipe", correct: 16, wrong: 1 },
        { japanese: "調味料", romaji: "choumiryou", english: "seasoning", correct: 7, wrong: 5 }
      ]
    },
    {
      id: 3,
      name: "Exercise Words",
      count: 10,
      words: [
        { japanese: "運動", romaji: "undou", english: "exercise", correct: 13, wrong: 2 },
        { japanese: "筋肉", romaji: "kinniku", english: "muscle", correct: 11, wrong: 3 },
        { japanese: "体育館", romaji: "taiikukan", english: "gymnasium", correct: 9, wrong: 4 },
        { japanese: "ジム", romaji: "jimu", english: "gym", correct: 15, wrong: 1 },
        { japanese: "トレーニング", romaji: "toreeningu", english: "training", correct: 12, wrong: 2 },
        { japanese: "ストレッチ", romaji: "sutorecchi", english: "stretch", correct: 14, wrong: 2 },
        { japanese: "ヨガ", romaji: "yoga", english: "yoga", correct: 10, wrong: 3 },
        { japanese: "マラソン", romaji: "marason", english: "marathon", correct: 8, wrong: 4 },
        { japanese: "水泳", romaji: "suiei", english: "swimming", correct: 16, wrong: 1 },
        { japanese: "サッカー", romaji: "sakkaa", english: "soccer", correct: 11, wrong: 3 }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Word Groups</h1>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Group Name</TableHead>
              <TableHead># Words</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group) => (
              <TableRow key={group.id}>
                <TableCell>
                  <Link 
                    to={`/groups/${group.id}`} 
                    className="hover:underline text-primary"
                  >
                    {group.name}
                  </Link>
                </TableCell>
                <TableCell>{group.count}</TableCell>
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
          Page <strong>1</strong> of 1
        </span>
        <Button variant="outline" size="sm" disabled>
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Groups;
