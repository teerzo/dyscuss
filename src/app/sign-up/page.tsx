import { auth } from '@/app/auth/auth';
// import { LoginButton } from '@/components/login-button'
// import { LoginForm } from '
import { LoginForm } from '@/components/login-form/login-form'
// import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function SignUpPage() {
  const cookieStore = cookies()
  const session = await auth({ cookieStore })
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    // <div className="flex h-10 h-[calc(100vh-theme(spacing.16))] flex-col items-center py-10">
    <div className='flex min-h-screen flex-col items-center'>
      <div className="w-full max-w-xl">
        <LoginForm action="sign-up" />
        {/* <Separator className="my-4" /> */}
        <div className="flex justify-center">
          {/* <LoginButton /> */}
        </div>
      </div>
    </div>
  )
}