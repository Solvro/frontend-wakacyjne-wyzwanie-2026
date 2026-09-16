import { notFound } from "next/navigation";
import { cache } from "react";
import { Metadata } from "next";
import { ProductDetails } from "@/components/product-details";
import { getProduct, getProducts } from "@/lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

const getCachedProduct = cache(async (id: string) => {
  return await getProduct(id);
});

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getCachedProduct(id);

  if (!product) {
    return {
      title: "Nie znaleziono produktu",
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = await getCachedProduct(id);

  if (product === undefined) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
