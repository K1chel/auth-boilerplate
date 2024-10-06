import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  className?: string;
  disabled?: boolean;
  loadingText?: string;
}

export const SubmitButton = ({
  children,
  size = "default",
  variant = "default",
  className,
  disabled,
  loadingText = "Loading...",
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      className={cn("w-full", className)}
      disabled={disabled}
    >
      {disabled ? (
        <div className="flex items-center justify-center gap-x-2">
          <Loader2Icon className="size-5 animate-spin" />
          <span>{loadingText}</span>
        </div>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};
