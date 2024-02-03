'use client'
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link className="text-sm font-medium hover:underline" href="/code-snippets/create">
            create
          </Link>
          <Link className="text-sm font-medium hover:underline" href="/code-snippets/profile">
            Profile
          </Link>
          <Link className="text-sm font-medium hover:underline" href="/code-snippets/feed">
            Feed
          </Link>
          <Link className="text-sm font-medium hover:underline" href="/code-snippets/leaderboard">
            LeaderBoard
          </Link>
          <Link className="text-sm font-medium hover:underline" href="/code-snippets/signIn">
            Sign In
          </Link>
        </nav>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to Acme Inc</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We provide the best code snippets for your projects.
                </p>
              </div>
              <div className="space-x-4">
                <Button className='py-5 px-8'>
                  <Link
                    className=""
                    href="/code-snippets/signIn"
                  >
                    Get Started
                  </Link>
                </Button>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/code-snippets/signIn"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-y">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Code Snippets</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our collection of code snippets for your next project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2">
                <img
                  alt="Code Snippet"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold">Code Snippet 1</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">A short description of the code snippet.</p>
                <Button className="mt-auto" variant="outline">
                  View Code
                </Button>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  alt="Code Snippet"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold">Code Snippet 2</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">A short description of the code snippet.</p>
                <Button className="mt-auto" variant="outline">
                  View Code
                </Button>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  alt="Code Snippet"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold">Code Snippet 3</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">A short description of the code snippet.</p>
                <Button className="mt-auto" variant="outline">
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8 py-12 px-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Featured Code Snippets</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>React Hook Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  A simple and reusable form with validation using React Hook Form.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>123 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>Redux Toolkit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  The official, opinionated, batteries-included toolset for efficient Redux development.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>456 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>Next.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">The React Framework for Production.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>789 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>React Query</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Fetching, caching, and updating asynchronous data in React.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React Query</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>321 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>React Router</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Declarative routing for React.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React Router</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>654 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>Styled Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Visual primitives for the component age.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Styled Components</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>987 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Popular Code Snippets</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>React Query</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Fetching, caching, and updating asynchronous data in React.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React Query</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>123 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>React Router</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Declarative routing for React.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React Router</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>456 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>Redux Toolkit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  The official, opinionated, batteries-included toolset for efficient Redux development.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>789 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>Next.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">The React Framework for Production.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>321 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  height="100"
                  src="/coding.jpg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardTitle>React Hook Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  A simple and reusable form with validation using React Hook Form.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>654 Views</span>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="ghost">
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Code Categories</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our code snippets by category.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Link
                className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
                href="#"
              >
                <ComponentIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Components</span>
              </Link>
              <Link
                className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
                href="#"
              >
                <CodeIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Utilities</span>
              </Link>
              <Link
                className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
                href="#"
              >
                <LayoutTemplateIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Templates</span>
              </Link>
              <Link
                className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
                href="#"
              >
                <MergeIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Integrations</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Community</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connect with our community of developers.
                </p>
              </div>
              <Button>Join Now</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
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
  )
}


function ComponentIcon(props: any) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function LayoutTemplateIcon(props: any) {
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  )
}


function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MergeIcon(props: any) {
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
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}


function EyeIcon(props: any) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

