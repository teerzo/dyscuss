
'use server';

import { auth } from '@/app/auth/auth';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Header() {
    const cookieStore = cookies()
    const session = await auth({ cookieStore })

    return (
        <div className='flex flex-row justify-between items-center p-5'>
            <span> © 2023 by dyscuss.au </span>

            <Link href="/privacy"> Privacy Policy </Link>
            <Link href="/terms-and-conditions"> Terms and conditions </Link>
            
            <button className='btn'> Cookie Settings </button>
        </div>
    )
}