import { useToast } from "../../hooks/use-toast";
import { Button } from "../ui/button";

export default function ShowToast({ status, message }: { status: "success" | "error"; message: string }) {
  const { toast } = useToast();
  return (
    <Button
      variant={status === "success" ? "outline" : "destructive"}
      onClick={() => {
        toast({
          description: message,
        });
      }}
    >
      {message}
    </Button>
  );
}
