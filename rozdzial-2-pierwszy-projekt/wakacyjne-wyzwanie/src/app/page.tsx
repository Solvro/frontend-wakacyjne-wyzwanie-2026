import TeamMemberCard from "./components/TeamMemberCard";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
      <main className={`min-h-screen flex items-center justify-center ${spaceGrotesk.className}`}>
          <TeamMemberCard
            name="Amelia Sroczyńska"
            role="Product Owner"
            bio="Prowadzę 27-osobowy projekt. Moim głównym celem jest zrozumienie potrzeb użytkowników i upewnienie się,
            że nasz produkt zawsze dostarcza maksymalną wartość."
            skills={["Agile", "Backlog Management", "Komunikacja biznesowa", "Figma"]}
          />
    </main>
  );
}
