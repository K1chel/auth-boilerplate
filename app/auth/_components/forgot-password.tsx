import Link from "next/link";

export const ForgotPassword = () => {
  return (
    <Link
      href="/auth/forgot-password"
      className="text-xs font-medium text-primary transition hover:underline hover:opacity-75 sm:text-sm"
    >
      Forgot password?
    </Link>
  );
};
