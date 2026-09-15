import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { ProductGrid } from "@/components/product-grid";
import { getProducts } from "@/lib/products";

// TODO: Dodaj revalidate, aby katalog korzystał z ISR.
export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16">
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Render & SEO Lab
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Katalog produktów
      </h1>
      <p className="text-muted-foreground mt-3 max-w-2xl">
        Zawartość strony jest gotowa. W tym rozdziale analizujesz sposób jej
        renderowania, a nie budujesz interfejs.
      </p>
      <ProductGrid className="mt-10">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${String(product.id)}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </ProductGrid>
    </main>
  );
}
