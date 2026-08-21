import { Spinner } from "@/src/components/ui/spinner";

export default function Loading() {
  return (
    <div className="grid place-items-center w-full py-12">
      <div className="w-full flex items-center justify-center gap-2">
        <Spinner className="size-7" />
        <span className="text-lg">Loading users</span>
      </div>
    </div>
  )
}