import { Logo } from "@/components/logo";

interface AuthHeaderProps {
  title: string;
  description: string;
}

export const AuthHeader = ({ description, title }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Logo />
      <div className="flex flex-col items-center justify-center gap-y-1">
        <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
