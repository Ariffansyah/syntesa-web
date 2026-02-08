import { Link } from "react-router";

interface NotFoundProps {
  errorMessage?: string;
  errorCode?: string;
}

export default function NotFound({
  errorMessage = "page_not_found",
  errorCode = "not_found",
}: NotFoundProps) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800 grid grid-cols-1 lg:grid-cols-2 h-full min-h-[400px] sm:min-h-150">
        <div className="flex items-center justify-center p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/20 bg-dot-grid">
          <h1 className="text-[4rem] sm:text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-gray-900 dark:text-neutral-100 font-mono">
            404
          </h1>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-12 md:p-24 space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block px-3 py-1 border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-xs font-mono uppercase tracking-wider">
              Error: {errorCode}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 dark:text-neutral-100">
              Page not found.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-400 max-w-md">
              The page you are looking for does not exist or has been moved. Please verify the URL
              or navigate back to the homepage.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/"
              className="px-6 sm:px-8 py-3 border border-gray-900 dark:border-apple-blue-500 bg-gray-900 dark:bg-apple-blue-500 text-white dark:text-white text-sm font-medium hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-apple-blue-400 transition-colors uppercase tracking-wider"
            >
              Return Home
            </Link>
            <Link
              to=".."
              className="px-6 sm:px-8 py-3 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-neutral-100 text-sm font-medium hover:border-gray-900 dark:hover:border-apple-blue-400 dark:hover:text-apple-blue-400 transition-colors uppercase tracking-wider"
            >
              Go Back
            </Link>
          </div>

          <div className="pt-8 sm:pt-12 border-t border-gray-200 dark:border-neutral-800">
            <pre className="font-mono text-xs text-gray-400 dark:text-neutral-600">
              {`{
  "status": 404,
  "error": "${errorMessage}",
  "timestamp": "${new Date().toISOString()}"
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
