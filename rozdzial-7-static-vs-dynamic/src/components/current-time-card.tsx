export function CurrentTimeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Rendering Lab
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-8">
        {description}
      </p>
      <time className="bg-muted mt-8 w-fit rounded-lg px-5 py-3 font-mono text-xl">
        {new Date().toLocaleString("pl-PL")}
      </time>
    </main>
  );
}
