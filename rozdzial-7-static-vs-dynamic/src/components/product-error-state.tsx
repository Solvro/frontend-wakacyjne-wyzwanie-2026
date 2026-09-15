"use client";

import { AlertCircle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProductErrorStateProps {
  error?: Error | string;
  onRetry?: () => void;
  title?: string;
  className?: string;
}

export function ProductErrorState({
  error,
  onRetry,
  title = "Wystąpił błąd podczas ładowania produktów",
  className,
}: ProductErrorStateProps) {
  let errorMessage = "Spróbuj ponownie za chwilę.";
  if (typeof error === "string") {
    errorMessage = error;
  } else if (error instanceof Error && error.message.length > 0) {
    errorMessage = error.message;
  }

  return (
    <div
      className={cn(
        "border-destructive/20 bg-destructive/5 flex flex-col items-center justify-center rounded-xl border p-12 text-center",
        className,
      )}
    >
      <div className="bg-destructive/10 text-destructive mb-4 flex size-14 items-center justify-center rounded-full">
        <AlertCircle className="size-7" />
      </div>
      <h3 className="text-destructive text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1 max-w-md text-sm">
        {errorMessage}
      </p>
      {onRetry === undefined ? null : (
        <Button
          onClick={onRetry}
          variant="outline"
          className="border-destructive/30 hover:bg-destructive/10 mt-6 gap-2"
        >
          <RotateCcw className="size-4" />
          Spróbuj ponownie
        </Button>
      )}
    </div>
  );
}
