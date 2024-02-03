"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";

export default function Component() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button className='flex p-6' variant="secondary">
            <CogIcon className="h-8 w-8 mr-2" />
            <p className='text-xs'>Settings</p>
          </Button>
        </SheetTrigger>
        <SheetContent
          className="overflow-scroll md:w-1/2 md:mx-auto"
          side="right"
        >
          <div className="p-4 md:p-8">
            <h2 className="text-lg font-bold md:text-xl">Settings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
              Make changes to your settings here. Click save when you're done.
            </p>
            <div className="mt-4 space-y-2 md:space-y-4">
              <div className="bg-white text-gray-900 p-4 w-64 space-y-6 md:block">
                <div>
                  <h2 className="text-lg font-semibold">Frame</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Padding
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="16">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="16">16</TabsTrigger>
                            <TabsTrigger value="32">32</TabsTrigger>
                            <TabsTrigger value="64">64</TabsTrigger>
                            <TabsTrigger value="128">128</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Radius
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="0">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="0">0</TabsTrigger>
                            <TabsTrigger value="8">8</TabsTrigger>
                            <TabsTrigger value="16">16</TabsTrigger>
                            <TabsTrigger value="24">24</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Visible
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="yes">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="yes">Yes</TabsTrigger>
                            <TabsTrigger value="no">No</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Opacity
                      </label>
                      <input
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        type="range"
                      />
                    </div>
                    <div>
                      <Button className="bg-blue-500 text-white w-full">
                        Background
                      </Button>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger id="aspect-ratio">
                          <SelectValue placeholder="Auto" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="auto">Auto</SelectItem>
                          <SelectItem value="16:9">16:9</SelectItem>
                          <SelectItem value="4:3">4:3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Window</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Background
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="default">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="default">Default</TabsTrigger>
                            <TabsTrigger value="alternative">
                              Alternative
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Header
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="yes">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="yes">Yes</TabsTrigger>
                            <TabsTrigger value="no">No</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                    <div>
                      <Button className="bg-blue-500 text-white">New</Button>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger id="shadow">
                          <SelectValue placeholder="Bottom" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="bottom">Bottom</SelectItem>
                          <SelectItem value="top">Top</SelectItem>
                          <SelectItem value="left">Left</SelectItem>
                          <SelectItem value="right">Right</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Reflection
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="show">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="show">Show</TabsTrigger>
                            <TabsTrigger value="hide">Hide</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Watermark
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="show">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="show">Show</TabsTrigger>
                            <TabsTrigger value="hide">Hide</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Editor</h2>
                  <div className="space-y-4">
                    <div>
                      <Select>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Typescript" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="typescript">Typescript</SelectItem>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="VSCode Dark" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="vscode-dark">
                            VSCode Dark
                          </SelectItem>
                          <SelectItem value="vscode-light">
                            VSCode Light
                          </SelectItem>
                          <SelectItem value="atom-dark">Atom Dark</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger id="formatter">
                          <SelectValue placeholder="TypeScript" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="typescript">TypeScript</SelectItem>
                          <SelectItem value="prettier">Prettier</SelectItem>
                          <SelectItem value="eslint">ESLint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Line number
                      </label>
                      <div className="flex space-x-1">
                        <Tabs defaultValue="show">
                          <TabsList className="flex space-x-2">
                            <TabsTrigger value="show">Show</TabsTrigger>
                            <TabsTrigger value="hide">Hide</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-4 w-full md:mt-6" type="submit">
              Save changes
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function CogIcon(props: any) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}
