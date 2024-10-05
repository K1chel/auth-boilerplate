import Link from "next/link";

interface AuthFooterProps {
  title: string;
  href: string;
  hrefText: string;
}

export const AuthFooter = ({ href, hrefText, title }: AuthFooterProps) => {
  return (
    <h4 className="space-x-1 text-center text-xs text-muted-foreground sm:text-sm">
      <span>{title}</span>
      <Link
        href={href}
        className="text-primary transition hover:underline hover:opacity-75"
      >
        {hrefText}
      </Link>
    </h4>
  );
};
