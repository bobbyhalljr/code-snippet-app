/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RLoERPhkX5N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Component() {
  return (
      <div className="container mx-auto px-4 py-6" >
  <h1 className="text-3xl font-bold mb-4" >
    Top Rated Code Snippets
  </h1>
  <div className="grid gap-6" >
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-lg shadow-md" >
      <Avatar className="w-10 h-10" >
        <AvatarImage alt="@user1"  src="/placeholder-avatar.jpg" />
        <AvatarFallback >
          U1
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1" >
        <div className="flex items-center space-x-2" >
          <h2 className="text-lg font-semibold" >
            @user1
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400" >
            JavaScript
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2" >
          {`const greet = (name) => "HelloO!" `}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-1" >
        <div className="flex items-center space-x-1" >
          <StarIcon className="w-4 h-4 text-yellow-500"  />
          <span >
            4.9
          </span>
        </div>
        <Button  size="sm">
          View Full
        </Button>
      </div>
    </div>
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-lg shadow-md" >
      <Avatar className="w-10 h-10" >
        <AvatarImage alt="@user2"  src="/placeholder-avatar.jpg" />
        <AvatarFallback >
          U2
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1" >
        <div className="flex items-center space-x-2" >
          <h2 className="text-lg font-semibold" >
            @user2
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400" >
            Python
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2" >
          
                    def greet(name): return f"Hello, !"
                  
        </p>
      </div>
      <div className="flex flex-col items-center space-y-1" >
        <div className="flex items-center space-x-1" >
          <StarIcon className="w-4 h-4 text-yellow-500"  />
          <span >
            4.8
          </span>
        </div>
        <Button  size="sm">
          View Full
        </Button>
      </div>
    </div>
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-lg shadow-md" >
      <Avatar className="w-10 h-10" >
        <AvatarImage alt="@user3"  src="/placeholder-avatar.jpg" />
        <AvatarFallback >
          U3
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1" >
        <div className="flex items-center space-x-2" >
          <h2 className="text-lg font-semibold" >
            @user3
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400" >
            Java
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2" >
          {`
                    public static String greet(String name) return "Hello, " + name + "!"; }
                  `}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-1" >
        <div className="flex items-center space-x-1" >
          <StarIcon className="w-4 h-4 text-yellow-500"  />
          <span >
            4.7
          </span>
        </div>
        <Button  size="sm">
          View Full
        </Button>
      </div>
    </div>
  </div>
  <div className="mt-6" >
    <DropdownMenu >
      <DropdownMenuTrigger asChild >
        <Button className="ml-auto shrink-0"  variant="outline">
          <ArrowUpDownIcon className="w-4 h-4 mr-2"  />
          
                    Sort by
                  
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]" >
        <DropdownMenuRadioGroup  value="rating">
          <DropdownMenuRadioItem  value="rating">
            
                        Rating
                      
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem  value="language">
            
                        Language
                      
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem  value="user">
            
                        User
                      
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>
    )
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
