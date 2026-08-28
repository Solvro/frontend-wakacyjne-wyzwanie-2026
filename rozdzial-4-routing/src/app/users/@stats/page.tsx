import { MOCK_USERS } from "@/src/components/UserProfilesList";

export default function StatsPage() {
    const total = MOCK_USERS.length;
    const pizzaLovers = MOCK_USERS.filter((user) => user.likesPizza).length;

    return (
        <div className="text-center p-4">
            <p>
                {pizzaLovers} z {total} użytkowników lubi pizzę!
            </p>
        </div>
    );
}
