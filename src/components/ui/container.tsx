import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-page-x",
        narrow ? "max-w-3xl" : "max-w-page",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
