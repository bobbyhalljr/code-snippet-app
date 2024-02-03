"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Top Rated Code Snippets</h1>

      <div className="mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto shrink-0" variant="secondary">
              <ArrowUpDownIcon className="w-4 h-4 mr-2" />
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuRadioGroup value="rating">
              <DropdownMenuRadioItem value="rating">
                Rating
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="language">
                Language
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="user">User</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid md:grid-cols-2 md:space-x-4 md:space-y-0 space-y-4 lg:grid-cols-3">
        <div className="gap-2">
          <div className="md:grid md:grid-cols-[auto_1fr_1] flex flex-col border gap-4 items-evenly p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg font-semibold mb-2">@user1</h2>
                <Avatar className="w-10 h-10">
                  <AvatarImage alt="@user1" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
                  <span>4.9</span>
                </div>
                <Button size="sm">
                  <Link href='/code-snippets/details'>
                    View Full
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-1 max-w-xl">
              <div className="flex items-center space-x-2">
                <span className="text-sm ml-2 font-semibold text-gray-400 dark:text-gray-400">
                  JavaScript
                </span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {`const greet = (name) => "HelloO!" const greet = (name) => "HelloO!" const greet = (name) => "HelloO!" `}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-6">
          <div className="md:grid md:grid-cols-[auto_1fr_1] flex flex-col border gap-4 items-evenly p-4 rounded-lg shadow-md">
            <div className="flex md:order-1 justify-between items-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg font-semibold mb-2">@user1</h2>
                <Avatar className="w-10 h-10">
                  <AvatarImage alt="@user1" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col md:order-3 items-center space-y-2">
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
                  <span>4.9</span>
                </div>
                <Button size="sm">
                  <Link href='/code-snippets/details'>
                    View Full
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-1 md:order-2 max-w-xl">
              <div className="flex items-center space-x-2">
                <span className="text-sm ml-2 font-semibold text-gray-400 dark:text-gray-400">
                  JavaScript
                </span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {`const greet = (name) => "HelloO!" const greet = (name) => "HelloO!" const greet = (name) => "HelloO!" `}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props: any) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
