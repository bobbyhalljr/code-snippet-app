'use client'
import { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { loginWithEmail, signUpWithGitHub } from '../../../lib/supabaseUtils/auth'
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Login to access your code snippets</p>
      </div>
      <div>
        <div className="space-y-4 pt-8">
          <Button onClick={signUpWithGitHub} className="w-full">
            Login with GitHub
          </Button>
        </div>
        <Separator className="my-8" />
          <p className="text-sm text-center py-8">Or sign in with a link sent to your email</p>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="m@example.com" required type="email" />
          </div>
          <Button onClick={() => loginWithEmail(email).then(() => router.push('/code-snippets/confirm'))} variant='secondary' className="w-full" type="submit">
            Send Magic Link
          </Button>
        </div>
      </div>
    </div>
  )
}

