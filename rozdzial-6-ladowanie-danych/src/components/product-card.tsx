"use client";

import { Heart, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

export interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
  onToggleFavorite?: (productId: number) => void;
  className?: string;
}

export function ProductCard({
  product,
  isFavorite = false,
  onToggleFavorite,
  className,
}: ProductCardProps) {
  const { id, title, description, category, price, rating, thumbnail } =
    product;

  return (
    <Card
      className={cn(
        "flex h-full flex-col justify-between overflow-hidden pt-0 transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="bg-muted relative aspect-square w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover/card:scale-105"
        />

        {onToggleFavorite === undefined ? null : (
          <Button
            type="button"
            variant="secondary"
            size="icon-sm"
            aria-label={
              isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"
            }
            className="bg-background/80 hover:bg-background absolute top-2.5 right-2.5 rounded-full shadow-xs backdrop-blur-xs"
            onClick={(event) => {
              event.preventDefault();
              onToggleFavorite(id);
            }}
          >
            <Heart
              className={cn(
                "size-4 transition-colors",
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-muted-foreground hover:text-foreground",
              )}
            />
          </Button>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <CardHeader className="gap-1.5 pb-2">
          <span className="bg-secondary text-secondary-foreground inline-block w-fit rounded-md px-2 py-0.5 text-xs font-medium capitalize">
            {category}
          </span>
          <CardTitle
            className="line-clamp-1 text-base font-semibold"
            title={title}
          >
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1">
          <CardDescription className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </div>

      <CardFooter className="border-border/50 bg-muted/30 mt-auto flex items-center justify-between border-t px-4 py-3">
        <span className="text-base font-bold tracking-tight">
          ${price.toFixed(2)}
        </span>

        {typeof rating === "number" ? (
          <div className="text-muted-foreground flex items-center gap-1 text-xs font-medium">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}
