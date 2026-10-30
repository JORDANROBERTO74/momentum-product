import Image from "next/image";
import { cn } from "@/lib/cn";

export interface ProductScreenshotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  variant?: "flat" | "panel";
  unstyled?: boolean;
}

export function ProductScreenshot({
  src,
  alt,
  width,
  height,
  aspectRatio = "16/9",
  priority = false,
  className,
  imageClassName,
  sizes = "(max-width: 1436px) 100vw, 1344px",
  variant = "flat",
  unstyled = false,
}: ProductScreenshotProps) {
  const useFill = !width || !height;
  const usePanel = !unstyled && variant === "panel";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        usePanel && "brand-panel rounded-2xl",
        !usePanel && !unstyled && "rounded-xl",
        className
      )}
      style={useFill ? { aspectRatio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill={useFill}
        width={useFill ? undefined : width}
        height={useFill ? undefined : height}
        priority={priority}
        sizes={sizes}
        className={cn("object-cover object-top", imageClassName)}
      />
    </div>
  );
}
