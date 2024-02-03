"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-slate-100 lg:block dark:bg-slate-800">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              {/* <MenuIcon className="h-6 w-6" /> */}
              <span className="">Code Snippet Social</span>
            </Link>

            {/* TODO: Add Notifications */}
            {/* <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/code-snippets/create"
              >
                <PlusIcon className="h-4 w-4" />
                New Snippet
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/code-snippets/profile"
              >
                <ProfileIcon className="h-4 w-4" />
                Profile
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="feed"
              >
                <CompassIcon className="h-4 w-4" />
                Feed
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="leaderboard"
              >
                <LeaderboardIcon className="h-4 w-4" />
                Leaderboard
              </Link>
            </nav>
            <div className="mt-12 border-t pt-8 p-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Upgrade</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Upgrade to Pro</DialogTitle>
                        <DialogDescription>
                          Enter your payment information to upgrade your
                          account.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="cardNumber">
                            Card Number
                          </Label>
                          <Input className="col-span-3" id="cardNumber" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="expiryDate">
                            Expiry Date
                          </Label>
                          <Input className="col-span-3" id="expiryDate" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="cvv">
                            CVV
                          </Label>
                          <Input className="col-span-3" id="cvv" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Upgrade</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Sheet key="1">
            <SheetTrigger asChild>
              <Button className="lg:hidden" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="bg-slate-100 black:bg-slate-800"
              side="left"
            >
              <div>
                <div className="flex h-full max-h-screen flex-col gap-2">
                  <div className="flex h-[60px] items-center border-b px-6">
                    <Link
                      className="flex items-center gap-2 font-semibold"
                      href="/"
                    >
                      <span className="">Code Snippet Social</span>
                    </Link>
                  </div>
                  <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/code-snippets/create"
                      >
                        <PlusIcon className="h-4 w-4" />
                        New Snippet
                      </Link>
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/code-snippets/profile"
                      >
                        <ProfileIcon className="h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/code-snippets/feed"
                      >
                        <CompassIcon className="h-4 w-4" />
                        Feed
                      </Link>
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/code-snippets/leaderboard"
                      >
                        <LeaderboardIcon className="h-4 w-4" />
                        Leaderboard
                      </Link>
                    </nav>
                    <div className="mt-12 border-t pt-8 p-4">
                      <Card>
                        <CardHeader className="pb-4">
                          <CardTitle>Upgrade to Pro</CardTitle>
                          <CardDescription>
                            Unlock all features and get unlimited access to our
                            support team
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button>Upgrade</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Upgrade to Pro</DialogTitle>
                                <DialogDescription>
                                  Enter your payment information to upgrade your
                                  account.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    className="text-right"
                                    htmlFor="cardNumber"
                                  >
                                    Card Number
                                  </Label>
                                  <Input
                                    className="col-span-3"
                                    id="cardNumber"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    className="text-right"
                                    htmlFor="expiryDate"
                                  >
                                    Expiry Date
                                  </Label>
                                  <Input
                                    className="col-span-3"
                                    id="expiryDate"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label className="text-right" htmlFor="cvv">
                                    CVV
                                  </Label>
                                  <Input className="col-span-3" id="cvv" />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit">Upgrade</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search snippets..."
                  type="search"
                />
              </div>
            </form>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/avatar.jpeg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-plus"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function FeedIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-newspaper"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-align-justify"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

function CodeIcon(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CompassIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-compass"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function ProfileIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-user"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LeaderboardIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-trending-up"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
