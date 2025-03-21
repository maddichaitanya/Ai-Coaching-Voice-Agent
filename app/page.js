import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>i am chiku</h1>
      <Button variant={"destructive"}>Jion Me</Button>

      <UserButton />
    </div>
  );
}
