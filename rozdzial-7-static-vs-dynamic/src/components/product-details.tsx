import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-2">
      <div className="bg-muted relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <Link
          href="/products"
          className="text-muted-foreground mb-6 text-sm hover:underline"
        >
          ← Wróć do katalogu
        </Link>
        <p className="text-muted-foreground text-sm font-medium capitalize">
          {product.category}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {product.title}
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-8">
          {product.description}
        </p>
        <p className="mt-8 text-3xl font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </main>
  );
}
