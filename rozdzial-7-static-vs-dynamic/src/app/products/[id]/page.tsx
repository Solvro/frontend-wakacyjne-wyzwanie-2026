import { notFound } from "next/navigation";

import { ProductDetails } from "@/components/product-details";
import { getProduct } from "@/lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  if (product === undefined) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
