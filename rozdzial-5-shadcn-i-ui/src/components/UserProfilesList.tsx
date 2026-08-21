import { User } from "../types/User";
import { UserProfileCard } from "./UserProfileCard";

export const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Frontend Developer",
    description: "Passionate about building responsive, high-performance web applications using React and Next.js. Always focused on clean code and accessibility.",
    avatarUrl: "https://robohash.org/alex",
    likesPizza: true,
  },
  {
    id: "2",
    name: "Sam Chen",
    role: "UI/UX Designer",
    description: "Dedicated to crafting intuitive and beautiful user interfaces. Specializes in user research, wireframing, and creating seamless interactive prototypes.",
    avatarUrl: "https://robohash.org/sam",
    likesPizza: true,
  },
  {
    id: "3",
    name: "Jordan Taylor",
    role: "Backend Engineer",
    description: "Specializes in designing scalable microservices and robust APIs. Experienced with Java Spring Boot, Python, and optimizing complex database queries.",
    avatarUrl: "https://robohash.org/jordan",
    likesPizza: false,
  },
];

export function UserProfileList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-12">
      {MOCK_USERS.map((user) => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
