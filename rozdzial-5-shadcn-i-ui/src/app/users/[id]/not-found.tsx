import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/src/components/ui/empty";
import { buttonVariants } from "@/src/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return <Empty className="h-full max-w-md mx-auto">
    <EmptyHeader>
      <EmptyTitle className="text-4xl font-extrabold">404</EmptyTitle>
      <EmptyDescription className="max-w-xs text-pretty leading-tight">
        Ups, nie mogliśmy znaleźć tego użytkownika
      </EmptyDescription>
    </EmptyHeader>

    <EmptyContent>
      <Link href="/" className={buttonVariants({
        variant: 'secondary'
      })}>Strona główna</Link>
    </EmptyContent>
  </Empty>
}