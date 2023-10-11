import { auth } from '@/app/auth/auth';
import { LoginButton } from '@/components/login-button/login-button'
import { LoginForm } from '@/components/login-form/login-form'
// import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import IFrame from '../../components/iframe/iframe';

export default async function CaseCreator() {
    const cookieStore = cookies()
    const session = await auth({ cookieStore })
    // redirect to home if user is already logged in
    if (!session?.user) {
        redirect('/')
    }
    return (
        <div className="flex flex-col w-full">
            <IFrame />
        </div>
    )
}