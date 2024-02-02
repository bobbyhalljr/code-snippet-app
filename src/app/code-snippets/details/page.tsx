'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <Link className="text-lg flex items-center font-semibold" href="#">
          <ArrowLeftIcon className="h-6 w-6 mr-2" />
          Back to Feed
        </Link>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline">
                <StarIcon className="h-4 w-4" />
                <span className="sr-only">Rate this snippet</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rate this snippet</DialogTitle>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <DialogFooter>
                <Button>Submit</Button>
                <div>
                  <Button variant="outline">Cancel</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
            <CardDescription>Lorem ipsum</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-gray-800 p-4 text-sm text-gray-200">
              <pre>
                <code>Lorem ipsum</code>
              </pre>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200">
                #JavaScript
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200">
                #React
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200">
                #JSX
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8">
          <Accordion className="w-full" collapsible type="single">
            <AccordionItem value="comments">
              <AccordionTrigger>
                <h2 className="text-2xl font-bold">Comments</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-6">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Avatar className="w-10 h-10 md:w-14 md:h-14">
                      <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Jared Palmer</h3>
                        <time className="text-sm text-gray-500">2 days ago</time>
                      </div>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">
                        This is a really helpful snippet, thanks for sharing!
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Avatar className="w-10 h-10 md:w-14 md:h-14">
                      <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Jared Palmer</h3>
                        <time className="text-sm text-gray-500">2 days ago</time>
                      </div>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">
                        This is a really helpful snippet, thanks for sharing!
                      </p>
                    </div>
                  </div>
                </div>
                <form className="mt-6">
                  <Label htmlFor="comment">Leave a comment</Label>
                  <Textarea className="mt-1" id="comment" />
                  <Button className="mt-4" type="submit">
                    Post Comment
                  </Button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  )
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function DotIcon(props: any) {
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
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
  )
}
