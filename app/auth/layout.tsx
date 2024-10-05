import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const { session } = await validateRequest();

  if (session) redirect("/");

  return (
    <main className="flex h-full min-h-dvh items-center justify-center bg-secondary px-6 py-10">
      <div className="mx-auto w-full rounded-2xl border bg-background px-10 py-8 drop-shadow-md sm:max-w-md">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
