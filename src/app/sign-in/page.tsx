import { auth } from '@/app/auth/auth';
import { LoginButton } from '@/components/login-button/login-button'
import { LoginForm } from '@/components/login-form/login-form'
// import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const cookieStore = cookies()
  const session = await auth({ cookieStore })
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-10">
      <div className="w-full max-w-lg">
        <LoginForm action="sign-in" />
        {/* <Separator className="my-4" /> */}
        {/* <div className="flex justify-center">
          <LoginButton> Sign in </LoginButton>
        </div> */}
      </div>
    </div>
  )
}