import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface ProductCardSkeletonProps {
  className?: string;
}

export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col justify-between overflow-hidden pt-0",
        className,
      )}
    >
      <Skeleton className="aspect-square w-full rounded-none" />

      <div className="flex flex-1 flex-col">
        <CardHeader className="gap-2 pb-2">
          <Skeleton className="h-5 w-16 rounded-md" />
          <Skeleton className="h-5 w-4/5" />
        </CardHeader>

        <CardContent className="flex-1 space-y-1.5">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-3/4" />
        </CardContent>
      </div>

      <CardFooter className="border-border/50 bg-muted/30 mt-auto flex items-center justify-between border-t px-4 py-3">
        <Skeleton className="h-5 w-14" />
        <Skeleton className="h-4 w-10" />
      </CardFooter>
    </Card>
  );
}

const DEFAULT_SKELETON_KEYS = Array.from(
  { length: 24 },
  (_, index) => `product-skeleton-${String(index)}`,
);

export interface ProductListSkeletonProps {
  count?: number;
  className?: string;
}

export function ProductListSkeleton({
  count = 8,
  className,
}: ProductListSkeletonProps) {
  const items = DEFAULT_SKELETON_KEYS.slice(0, count);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((itemKey) => (
        <ProductCardSkeleton key={itemKey} />
      ))}
    </div>
  );
}
