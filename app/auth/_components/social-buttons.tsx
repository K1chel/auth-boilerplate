import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";

export const SocialButtons = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-x-3">
        <Link
          href="/api/auth/github"
          className={buttonVariants({
            size: "sm",
            variant: "outline",
            className: "flex w-full items-center gap-x-2 rounded-xl",
          })}
        >
          <FaGithub className="size-4" />
          GitHub
        </Link>
        <Link
          href="/api/auth/google"
          className={buttonVariants({
            size: "sm",
            variant: "outline",
            className: "flex w-full items-center gap-x-2 rounded-xl",
          })}
        >
          <FcGoogle className="size-4" />
          Google
        </Link>
      </div>
      <div className="flex items-center justify-between gap-x-3">
        <span className="h-px w-full bg-muted" />
        <span className="text-xs font-medium text-muted-foreground sm:text-sm">
          or
        </span>
        <span className="h-px w-full bg-muted" />
      </div>
    </div>
  );
};
