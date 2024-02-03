'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <div className="flex flex-col items-center border-b-2 pb-12 justify-center space-y-4">
        <Avatar className="h-24 md:h-32 w-24 md:w-32">
          <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
          <AvatarFallback>BH</AvatarFallback>
        </Avatar>
        <div className="grid gap-0.5 text-xs text-center">
          <div className="font-medium text-2xl">Bobby Hall</div>
          <div className="text-gray-500 md:text-lg text-base dark:text-gray-400">example@acme.inc</div>
          <div className="text-gray-500 md:text-lg text-base dark:text-gray-400">Software Engineer at Acme Inc</div>
        </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='lg'>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="name">
                    Name
                  </Label>
                  <Input className="col-span-3" id="name" value="Bobby Hall" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="email">
                    Email
                  </Label>
                  <Input className="col-span-3" id="email" value="example@acme.inc" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="job">
                    Job Title
                  </Label>
                  <Input className="col-span-3" id="job" value="Software Engineer at Acme Inc." />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="image">
                    Image
                  </Label>
                  <Input className="col-span-3" id="image" value="/placeholder-avatar.jpg" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
      </div>

      <div className="w-2/3 overflow-hidden py-16 mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Users to Follow</h2>
        <Carousel className="w-full md:w-full flex justify-center mx-auto max-w-2xl">
          <CarouselContent>
            <CarouselItem className='basis-3/3 md:basis-2/3 lg:basis-1/3'>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <div className="text-lg font-semibold">User 1</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Vercel</div>
                      <Button size="sm">Follow</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='basis-3/3 md:basis-2/3 lg:basis-1/3'>
              <div className="p-1">
              <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <div className="text-lg font-semibold">User 1</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Vercel</div>
                      <Button size="sm">Follow</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='basis-3/3 md:basis-2/3 lg:basis-1/3'>
              <div className="p-1">
              <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <div className="text-lg font-semibold">User 1</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Vercel</div>
                      <Button size="sm">Follow</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

