import Link from "next/link";

const routes = [
  ["/rendering-lab/static", "Statyczna"],
  ["/rendering-lab/dynamic", "Dynamiczna"],
  ["/rendering-lab/isr", "ISR"],
];

export default function RenderingLabPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Rendering Lab
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Ta sama strona, trzy strategie
      </h1>
      <p className="text-muted-foreground mt-4 text-lg leading-8">
        Każda trasa pokazuje aktualny czas. Zadanie polega na zmianie wyłącznie
        konfiguracji renderowania.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {routes.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="border-border rounded-md border px-4 py-2 text-sm font-medium"
          >
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}
