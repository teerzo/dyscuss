import { auth } from '@/app/auth/auth';
import { cookies } from 'next/headers'

export default async function PrivacyPage() {
    const cookieStore = cookies()
    const session = await auth({ cookieStore })

    return (
        <div className="flex flex-col w-full min-h-screen">

            <div data-theme="light" className='prose container p-10'>
                <h2 className='text-center'> Resources </h2>


            </div>
        </div>
    )
}