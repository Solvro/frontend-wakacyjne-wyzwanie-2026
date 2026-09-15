import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { ProductEmptyState } from "@/components/product-empty-state";
import { ProductGrid } from "@/components/product-grid";
import { searchProducts } from "@/lib/products";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const products = searchProducts(q);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16">
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Render & SEO Lab
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Wyszukiwanie
      </h1>
      <form className="mt-8 flex max-w-xl gap-3" action="/search">
        <input
          name="q"
          defaultValue={q}
          placeholder="Np. lamp, shoes..."
          className="border-input h-10 flex-1 rounded-md border bg-transparent px-3 text-sm"
        />
        <button
          className="bg-primary text-primary-foreground rounded-md px-4 text-sm font-medium"
          type="submit"
        >
          Szukaj
        </button>
      </form>
      {q.length === 0 ? (
        <p className="text-muted-foreground mt-8">
          Wpisz frazę, aby przeszukać katalog.
        </p>
      ) : products.length === 0 ? (
        <ProductEmptyState className="mt-8" />
      ) : (
        <ProductGrid className="mt-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${String(product.id)}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </ProductGrid>
      )}
    </main>
  );
}
