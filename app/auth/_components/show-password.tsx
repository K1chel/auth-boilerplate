import { EyeIcon, EyeOffIcon } from "lucide-react";

interface ShowPasswordProps {
  showPassword: boolean;
  onToggleShowPassword: () => void;
  disabled?: boolean;
}

export const ShowPassword = ({
  onToggleShowPassword,
  showPassword,
  disabled,
}: ShowPasswordProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggleShowPassword}
      className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded-md rounded-l-none border-l text-muted-foreground transition hover:text-current"
    >
      {showPassword ? (
        <EyeIcon className="size-4" />
      ) : (
        <EyeOffIcon className="size-4" />
      )}
    </button>
  );
};
