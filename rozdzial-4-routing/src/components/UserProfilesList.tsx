import { User } from "../types/User";
import { UserProfileCard } from "./UserProfileCard";

const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Frontend Developer",
    avatarUrl: "https://robohash.org/alex",
    likesPizza: true,
  },
  {
    id: "2",
    name: "Sam Chen",
    role: "UI/UX Designer",
    avatarUrl: "https://robohash.org/sam",
    likesPizza: true,
  },
  {
    id: "3",
    name: "Jordan Taylor",
    role: "Backend Engineer",
    avatarUrl: "https://robohash.org/jordan",
    likesPizza: false,
  },
];

export function UserProfileList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {MOCK_USERS.map((user) => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
