'use client';

import { User } from "@/src/types/User";
import { MOCK_USERS } from "@/src/components/UserProfilesList";
import {useParams, useRouter} from "next/navigation";
import {
  Dialog,
  DialogContent, DialogHeader, DialogTitle,
} from "@/src/components/ui/dialog"
import { UserProfileDetails } from "@/src/components/UserProfileDetails";

export default function UserModal() {
  const { id } = useParams<{ id: string; }>();
  const router = useRouter();
  const user: User | undefined = MOCK_USERS.find((user) => user.id === id);


  const onOpenChange = () => {
    router.back();
  }

  return (
    <Dialog open defaultOpen onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User profile</DialogTitle>
        </DialogHeader>

        {user
          ? <UserProfileDetails user={user} />
          : <>
              {/*
                Dodaj komponent 'Empty' z shadcn
                tak jak w error.tsx i not-found.tsx.
                Dostosuj go do modalu
              */}
              Brak użytkownika
            </>
        }
      </DialogContent>
    </Dialog>
  )
}