import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ className, size = 35 }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-x-1.5", className)}>
      <Image src="/logo.png" alt="Logo" width={size} height={size} />
      <h2 className="text-xl font-semibold">{siteConfig.name}</h2>
    </Link>
  );
};
