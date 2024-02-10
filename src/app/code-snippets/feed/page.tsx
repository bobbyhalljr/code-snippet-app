"use client";
import React, { useEffect } from 'react'
import Link from "next/link";
import {
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllSnippets } from '@/lib/supabaseUtils/snippets';

interface FeedProps {
  title: string;
  description: string;
  content: string;
  language: string;
  total_views: number;
  created_at: string;
}

export default function Component({ title, content, language, total_views, created_at}: FeedProps) {

  useEffect(() => {
    getAllSnippets().then(data => console.log(data))
  },[])

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 border-y">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Code Snippets
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our collection of code snippets for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 gap-6">
            <Card className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <CardHeader className="flex items-center p-4 border-b">
                <Avatar>
                  <AvatarImage
                    alt="Irma Watson"
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <AvatarFallback>IW</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-semibold">Irma Watson</p>
                  <p className="text-xs text-gray-500">7 Dec, 2:25 PM</p>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm font-medium">
                  How do I return the response/result from a function foo that
                  makes an asynchronous request?
                </p>
                <div className="mt-4 p-4 bg-black rounded-md">
                  <pre className="text-xs text-white">
                    <code>
                      {`function foo() {
                        var result;
                        $.ajax({
                          url: '...',
                          success: function(response) {
                            result = response;
                            // return response; // <- I tried that one as well
                          }
                        });
                        return result; // It always returns 'undefined'
                      }`}
                    </code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-between p-4 border-t">
                <div className="flex space-x-2">
                  <Badge variant="secondary">javascript</Badge>
                  <Badge variant="secondary">asynchronous</Badge>
                  <Badge variant="secondary">ajax</Badge>
                </div>
                <div className="flex space-x-8 pt-8 justify-evenly">
                  <div className="flex items-center space-x-1">
                    <Button size="icon" variant="ghost">
                      <HeartIcon className="text-gray-500" />
                    </Button>
                    <span className="text-sm font-medium">20</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button size="icon" variant="ghost">
                      <CommentIcon className="text-gray-500" />
                    </Button>
                    <span className="text-sm font-medium">37</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button size="icon" variant="ghost">
                      <EyeIcon className="text-gray-500" />
                    </Button>
                    <span className="text-sm font-medium">533</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Code Categories
            </h2>
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
    </div>
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
  );
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
  );
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
  );
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
  );
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
  );
}

function CommentIcon(props: any) {
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
      <path d="M21 10h-4.586c-.78 0-1.481-.488-1.755-1.222l-1.041-2.605A2 2 0 0 0 12.586 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
    </svg>
  );
}
