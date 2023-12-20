import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Something Something</h1>
      <Button className="mt-4" asChild>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
}
