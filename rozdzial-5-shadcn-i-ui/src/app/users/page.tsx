import { UserProfileList } from "@/src/components/UserProfilesList";

export default async function Users() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <div>
      <UserProfileList />
    </div>
  )
}