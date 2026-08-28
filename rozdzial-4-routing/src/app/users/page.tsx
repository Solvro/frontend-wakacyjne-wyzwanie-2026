import { UserProfileList } from "../../components/UserProfilesList";

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function UsersHome() {

    await wait(2000);

    return (
        <main className="min-h-screen flex flex-col justify-between items-center mx-auto max-w-5xl p-8 text-center">
            <div className="w-full my-auto py-8">
                <UserProfileList />
            </div>
        </main>
    );
}