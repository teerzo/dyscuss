
'use client';

// import { auth } from '@/app/auth/auth';
// import { cookies } from 'next/headers';
import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';



export default function Header() {
    // const cookieStore = cookies()
    // const session = await auth({ cookieStore })
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    function toggleModal() {
        console.log('toggleModal', router, searchParams);

        if (searchParams.get('cookies')) {
            router.push(`${pathname}`);
        }
        else {
            // searchParams.append('modal', show)
            router.push(`${pathname}?${createQueryString('cookies', 'show')}`);
        }
        // router.push({ query: {}})


        // if( router.query.includes('modal='))


        // const params = new URLSearchParams(searchParams);
        // if (params.get('modal')) {
        //     params.set('modal', 'true');
        // }
        // else {
        //     params.set('modal', 'false');
        // }
    }

    return (
        <div className='flex flex-row justify-between items-center p-5'>
            <span> © 2023 by dyscuss.au </span>

            <Link href="/privacy"> Privacy Policy </Link>
            <Link href="/terms-and-conditions"> Terms and conditions </Link>

            <button className='btn' onClick={toggleModal}> Cookie Settings </button>
        </div>
    )
}