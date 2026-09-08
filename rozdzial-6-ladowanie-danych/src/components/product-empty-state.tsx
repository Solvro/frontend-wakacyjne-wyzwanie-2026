import { PackageSearch } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface ProductEmptyStateProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function ProductEmptyState({
  title = "Nie znaleziono produktów",
  description = "Nie udało się znaleźć produktów spełniających Twoje kryteria. Spróbuj zmienić frazę wyszukiwania.",
  action,
  className,
}: ProductEmptyStateProps) {
  return (
    <div
      className={cn(
        "border-border/80 flex flex-col items-center justify-center rounded-xl border border-dashed p-12 text-center",
        className,
      )}
    >
      <div className="bg-muted text-muted-foreground mb-4 flex size-14 items-center justify-center rounded-full">
        <PackageSearch className="size-7" />
      </div>
      <h3 className="text-foreground text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1 max-w-sm text-sm">
        {description}
      </p>
      {action === undefined ? null : <div className="mt-6">{action}</div>}
    </div>
  );
}
