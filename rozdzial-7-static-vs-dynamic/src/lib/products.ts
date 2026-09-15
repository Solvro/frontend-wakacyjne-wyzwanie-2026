import { PRODUCTS } from "@/data/products";

export function getProducts() {
  return PRODUCTS;
}

export async function getProduct(id: string) {
  await Promise.resolve();
  return PRODUCTS.find((product) => product.id === Number(id));
}

export function searchProducts(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (normalizedQuery.length === 0) {
    return [];
  }

  return PRODUCTS.filter((product) =>
    `${product.title} ${product.category}`
      .toLowerCase()
      .includes(normalizedQuery),
  );
}
