'use client';

export default function ErrorPage({error, reset}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
            <p>Wystąpił błąd podczas ładowania użytkowników: {error.message}</p>
            <button
                onClick={() => reset()}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Spróbuj ponownie
            </button>
        </div>
    );
}