import { MOCK_USERS } from "@/src/components/UserProfilesList";
import { notFound } from "next/navigation";

export default async function UserDetailsPage({params}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const user = MOCK_USERS.find((u) => u.id === id);

    if (!user) {
        notFound();
    }

    return (
        <main>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
        </main>
    );
}