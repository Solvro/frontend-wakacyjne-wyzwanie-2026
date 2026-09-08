import * as React from "react";

import { cn } from "@/lib/utils";

export interface ProductGridProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function ProductGrid({
  children,
  className,
  ...props
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
