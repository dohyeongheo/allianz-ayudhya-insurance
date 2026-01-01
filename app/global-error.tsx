"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Send error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">오류가 발생했습니다</h1>
              <p className="text-muted-foreground">
                예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
              </p>
            </div>
            {process.env.NODE_ENV === "development" && (
              <div className="p-4 bg-muted rounded-lg text-left">
                <p className="text-sm font-semibold mb-2">에러 상세:</p>
                <pre className="text-xs text-muted-foreground overflow-auto">
                  {error.message}
                  {error.stack}
                </pre>
              </div>
            )}
            <button
              onClick={reset}
              className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

