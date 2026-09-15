import { CurrentTimeCard } from "@/components/current-time-card";

// TODO: Dodaj revalidate = 10 i obserwuj stale-while-revalidate.
export default function IsrPage() {
  return (
    <CurrentTimeCard
      title="ISR"
      description="Ta trasa ma zostać odświeżona w tle po wygaśnięciu cache'a."
    />
  );
}
