import Link from "next/link";
import { User } from "../types/User";

interface UserProfileCardProps {
  user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="w-16 h-16 rounded-full mb-3"
      />
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{user.role}</p>
      <Link
        href={`/users/${user.id}`}
        className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
      >
        Zobacz profil
      </Link>
    </div>
  );
}
