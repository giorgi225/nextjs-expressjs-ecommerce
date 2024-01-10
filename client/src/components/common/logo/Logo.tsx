// Next
import Image from "next/image";
import Link from "next/link";

// Types
import { LogoTypes } from "@/types/components/component.types";

const sizeMappings: Record<string, { width: number; height: number }> = {
  small: { width: 26, height: 26 },
  medium: { width: 32, height: 32 },
  large: { width: 36, height: 36 },
};
const generateLogoSize = (size: LogoTypes["size"] = "small") => {
  return sizeMappings[size];
};

const Logo = ({ size, hasTitle = false }: LogoTypes) => {
  const { width, height } = generateLogoSize(size);
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        width={width}
        height={height}
        priority={true}
        alt="iShop Logo"
      />
      {hasTitle && <p className="text-xl font-medium text-primary">iShop</p>}
    </Link>
  );
};

export default Logo;
