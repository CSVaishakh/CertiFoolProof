'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          500
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
          Something went wrong! Please try again or return to the homepage.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <button
            onClick={reset}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white gap-2 text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
          >
            Try again
          </button>
          
          <a
            href="/"
            className="rounded-full border border-solid border-blue-600 transition-colors flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
          >
            Go home
          </a>
        </div>
      </main>
    </div>
  );
} 