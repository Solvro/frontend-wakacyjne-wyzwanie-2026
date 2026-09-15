import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Wakacyjne Wyzwanie 2026
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Render &amp; SEO Lab
      </h1>
      <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-8">
        Dobieraj strategię renderowania świadomie: statycznie dla treści
        trwałej, dynamicznie dla danych zależnych od żądania.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
          href="/products"
        >
          Otwórz katalog
        </Link>
        <Link
          className="border-border rounded-md border px-4 py-2 text-sm font-medium"
          href="/search"
        >
          Wyszukiwanie
        </Link>
      </div>
    </main>
  );
}
