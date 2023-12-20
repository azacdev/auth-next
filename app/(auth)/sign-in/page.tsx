import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignInForm } from "./sign-in-form";

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex justify-center items-center">
      <SignInForm />
    </div>
  );
}
