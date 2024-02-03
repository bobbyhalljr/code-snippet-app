// @ts-nocheck
// TODO: add types for slect and other components to have the "className" prop
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 lg:px-12 xl:px-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <h1 className="font-semibold text-lg md:text-2xl">My Snippets</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg'>
              <PlusIcon className='w-6 h-6 mr-1'/>
              Add Snippet 
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Snippet</DialogTitle>
              <DialogDescription>
                Make changes to your snippet here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="title">
                  Title
                </Label>
                <Input className="col-span-3" id="title" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="description">
                  Description
                </Label>
                <Input className="col-span-3" id="description" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="tags">
                  Tags
                </Label>
                <Input className="col-span-3" id="tags" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="language">
                  Language
                </Label>
                <Select className="col-span-3" id="language">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="csharp">C#</SelectItem>
                    <SelectItem value="ruby">Ruby</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="visibility">
                  Visibility
                </Label>
                <Select className="col-span-3" id="visibility">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="code">
                  Code
                </Label>
                <Textarea
                  className="col-span-3"
                  id="code"
                  placeholder="Enter your code here..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border shadow-sm rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Language</TableHead>
              <TableHead className="hidden md:table-cell">Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow>
              <TableCell className="font-medium">Angular Directive</TableCell>
              <TableCell className="hidden md:table-cell">Angular</TableCell>
              <TableCell className="hidden md:table-cell">2024-01-03</TableCell>
              <TableCell className="flex">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='flex items-center' size="sm" variant="outline">
                      Edit
                      <EditIcon className="ml-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Snippet</DialogTitle>
                      <DialogDescription>
                        Make changes to your snippet here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="title">
                          Title
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Default Title"
                          id="title"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                          Description
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Default Description"
                          id="description"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="language">
                          Language
                        </Label>
                        <Select className="col-span-3" id="language">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="javascript" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">
                              JavaScript
                            </SelectItem>
                            <SelectItem value="typescript">
                              TypeScript
                            </SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="csharp">C#</SelectItem>
                            <SelectItem value="ruby">Ruby</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="visibility">
                          Visibility
                        </Label>
                        <Select className="col-span-3" id="visibility">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="public" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="code">
                          Code
                        </Label>
                        <Textarea
                          className="col-span-3"
                          defaultValue="// Enter your code here..."
                          id="code"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="ml-2"
                      size="sm"
                      variant="destructiveOutline"
                    >
                      Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Delete Snippet</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this code snippet? This
                        action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="w-3/4 md:w-full mx-auto">
                      <Button className="mt-4 md:mt-0" variant="outline">
                        Cancel
                      </Button>
                      <Button variant="destructive" className="lg:ml-auto">
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="ml-2 flex items-center" size="sm">
                      Share
                      <ShareIcon className="ml-1" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    className="rounded-t-lg w-full md:w-[600px] mx-auto"
                    side="bottom"
                  >
                    <div className="p-4 space-y-4">
                      <h2 className="text-lg font-semibold mb-2">
                        Share Code Snippet
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Share this code snippet to your favorite social media
                        platforms, send through message or export it.
                      </p>
                      <div className="w-2/3 border p-4 space-y-6 rounded-lg mx-auto">
                        <Button
                          className="w-full mb-2 mt-8 flex items-center"
                          size="lg"
                        >
                          <FacebookIcon className="mr-2 h-5 w-5" />
                          Share on Facebook
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <TwitterIcon className="mr-2 h-5 w-5" />
                          Share on Twitter
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <LinkedinIcon className="mr-2 h-5 w-5" />
                          Share on LinkedIn
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <MessageCircleIcon className="mr-2 h-5 w-5" />
                          Send as Message
                        </Button>
                        <Button size="lg" className="w-full flex bg-slate-500 hover:bg-slate-800/90 text-white items-center">
                          <ImportIcon className="mr-2 h-5 w-5" />
                          Export Code Snippet
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Angular Directive</TableCell>
              <TableCell className="hidden md:table-cell">Angular</TableCell>
              <TableCell className="hidden md:table-cell">2024-01-03</TableCell>
              <TableCell className="flex">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='flex items-center' size="sm" variant="outline">
                      Edit
                      <EditIcon className="ml-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Snippet</DialogTitle>
                      <DialogDescription>
                        Make changes to your snippet here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="title">
                          Title
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Default Title"
                          id="title"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                          Description
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Default Description"
                          id="description"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="language">
                          Language
                        </Label>
                        <Select className="col-span-3" id="language">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="javascript" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">
                              JavaScript
                            </SelectItem>
                            <SelectItem value="typescript">
                              TypeScript
                            </SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="csharp">C#</SelectItem>
                            <SelectItem value="ruby">Ruby</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="visibility">
                          Visibility
                        </Label>
                        <Select className="col-span-3" id="visibility">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="public" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="code">
                          Code
                        </Label>
                        <Textarea
                          className="col-span-3"
                          defaultValue="// Enter your code here..."
                          id="code"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="ml-2"
                      size="sm"
                      variant="destructiveOutline"
                    >
                      Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Delete Snippet</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this code snippet? This
                        action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="w-3/4 md:w-full mx-auto">
                      <Button className="mt-4 md:mt-0" variant="outline">
                        Cancel
                      </Button>
                      <Button variant="destructive" className="lg:ml-auto">
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="ml-2 flex items-center" size="sm">
                      Share
                      <ShareIcon className="ml-1" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    className="rounded-t-lg w-full md:w-[600px] mx-auto"
                    side="bottom"
                  >
                    <div className="p-4 space-y-4">
                      <h2 className="text-lg font-semibold mb-2">
                        Share Code Snippet
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Share this code snippet to your favorite social media
                        platforms, send through message or export it.
                      </p>
                      <div className="w-2/3 border p-4 space-y-6 rounded-lg mx-auto">
                        <Button
                          className="w-full mb-2 mt-8 flex items-center"
                          size="lg"
                        >
                          <FacebookIcon className="mr-2 h-5 w-5" />
                          Share on Facebook
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <TwitterIcon className="mr-2 h-5 w-5" />
                          Share on Twitter
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <LinkedinIcon className="mr-2 h-5 w-5" />
                          Share on LinkedIn
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <MessageCircleIcon className="mr-2 h-5 w-5" />
                          Send as Message
                        </Button>
                        <Button size="lg" className="w-full flex bg-slate-500 hover:bg-slate-800/90 text-white items-center">
                          <ImportIcon className="mr-2 h-5 w-5" />
                          Export Code Snippet
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Angular Directive</TableCell>
              <TableCell className="hidden md:table-cell">Angular</TableCell>
              <TableCell className="hidden md:table-cell">2024-01-03</TableCell>
              <TableCell className="flex">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='flex items-center' size="sm" variant="outline">
                      Edit
                      <EditIcon className="ml-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Snippet</DialogTitle>
                      <DialogDescription>
                        Make changes to your snippet here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="title">
                          Title
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Default Title"
                          id="title"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                          Description
                        </Label>
                        <Input
                          className="col-span-3"
                          defaultValue="Default Description"
                          id="description"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="language">
                          Language
                        </Label>
                        <Select className="col-span-3" id="language">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="javascript" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">
                              JavaScript
                            </SelectItem>
                            <SelectItem value="typescript">
                              TypeScript
                            </SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="csharp">C#</SelectItem>
                            <SelectItem value="ruby">Ruby</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="visibility">
                          Visibility
                        </Label>
                        <Select className="col-span-3" id="visibility">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="public" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="code">
                          Code
                        </Label>
                        <Textarea
                          className="col-span-3"
                          defaultValue="// Enter your code here..."
                          id="code"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="ml-2"
                      size="sm"
                      variant="destructiveOutline"
                    >
                      Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Delete Snippet</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this code snippet? This
                        action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="w-3/4 md:w-full mx-auto">
                      <Button className="mt-4 md:mt-0" variant="outline">
                        Cancel
                      </Button>
                      <Button variant="destructive" className="lg:ml-auto">
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="ml-2 flex items-center" size="sm">
                      Share
                      <ShareIcon className="ml-1" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    className="rounded-t-lg w-full md:w-[600px] mx-auto"
                    side="bottom"
                  >
                    <div className="p-4 space-y-4">
                      <h2 className="text-lg font-semibold mb-2">
                        Share Code Snippet
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Share this code snippet to your favorite social media
                        platforms, send through message or export it.
                      </p>
                      <div className="w-2/3 border p-4 space-y-6 rounded-lg mx-auto">
                        <Button
                          className="w-full mb-2 mt-8 flex items-center"
                          size="lg"
                        >
                          <FacebookIcon className="mr-2 h-5 w-5" />
                          Share on Facebook
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <TwitterIcon className="mr-2 h-5 w-5" />
                          Share on Twitter
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <LinkedinIcon className="mr-2 h-5 w-5" />
                          Share on LinkedIn
                        </Button>
                        <Button
                          className="w-full mb-2 flex items-center"
                          size="lg"
                        >
                          <MessageCircleIcon className="mr-2 h-5 w-5" />
                          Send as Message
                        </Button>
                        <Button size="lg" className="w-full flex bg-slate-500 hover:bg-slate-800/90 text-white items-center">
                          <ImportIcon className="mr-2 h-5 w-5" />
                          Export Code Snippet
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function EditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-pencil"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
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

function FolderIcon(props: any) {
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-share"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
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

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function ImportIcon(props) {
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
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MessageCircleIcon(props) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}
