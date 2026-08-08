import TeamMemberCard from "@/components/TeamMemberCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-6">
      <TeamMemberCard
        name="Piotr Kowalski"
        role="Frontend Developer"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis arcu vitae erat sollicitudin, ac hendrerit neque auctor."
        skills={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
      />
    </main>
  );
}
