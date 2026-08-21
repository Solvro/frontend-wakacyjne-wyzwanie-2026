'use client';

import { Button } from "@/src/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle, EmptyMedia } from "@/src/components/ui/empty";
import { UserRoundXIcon } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message = error.message || 'Podczas pobierania listy użytkowników wystąpił nieoczekiwany błąd!';

  return (
    // Użycie komponentu 'Empty' do wyświetlenia informacji o błędzie
    <Empty className="h-full bg-muted/60 max-w-md mx-auto">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-destructive/10">
          <UserRoundXIcon className="text-destructive size-5" />
        </EmptyMedia>
        <EmptyTitle className="text-xl">Wystąpił błąd</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty leading-tight">
          {message}
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        <Button variant="outline" onClick={reset}>
          Spróbuj ponownie
        </Button>
      </EmptyContent>
    </Empty>
  )
}