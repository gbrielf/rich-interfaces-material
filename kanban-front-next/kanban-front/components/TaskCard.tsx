import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  taskcard: { // Recebemos o objeto "tarefa" inteiro
    title: string;
    description: string | null;
    priority: 'Baixa' | 'Média' | 'Alta';
    tags: { nome: string }[]; // Supondo que as tags venham assim da API
  }
}
export default function TaskCard({ taskcard }: TaskCardProps) {
return (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg">{taskcard.title}</CardTitle>
      {taskcard.description &&(
        <CardDescription>{taskcard.description}</CardDescription>
      )}
    </CardHeader>

    <CardContent>
      <Badge variant={taskcard.priority === 'Alta' ? 'destructive': 'outline'}>
         {taskcard.priority}
      </Badge>
    </CardContent>

    {taskcard.tags.length > 0 && (
      <CardFooter className="flex gap-2 flex-wrap">
        {taskcard.tags.map((tag) => (
          <Badge key={tag.name} variant="secondary">
              {tag.name}
          </Badge>
        ))}
      </CardFooter>
    )}
    </Card>  
  );
}