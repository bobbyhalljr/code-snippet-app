import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <CheckIcon className="w-24 h-24 text-green-500 dark:text-green-400" />
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mt-4">Check your email</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mt-2 px-4">
        We've sent a magic link to your email. Click on that link to sign in.
      </p>
      <Button className="mt-6" size="lg">
        <a href="https://gmail.com">Go to Email</a>
      </Button>
    </main>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
