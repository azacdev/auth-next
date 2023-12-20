import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { SignUpForm } from "./sign-up-form";

export default async function SignUpPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex justify-center items-center">
      <SignUpForm />
    </div>
  );
}
