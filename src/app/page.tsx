'use server'

import { auth } from "@/app/auth/auth";

import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { cache } from 'react'

import { Toaster } from "react-hot-toast";

import type { Database } from '@/lib/database.types'


import Footer from '@/components/footer/footer';
import IFrame from "../components/iframe/iframe";

import bgImage from '../../public/bg-ipsen.jpg';

import imgHipaa from '../../public/hipaa.png';
import imgGDPR from '../../public/gdpr.png';
import imgDigital from '../../public/digital.png';


import Image from "next/image";

export default async function Home() {

  const cookieStore = cookies()
  const session = await auth({ cookieStore })



  if (!session) {
    // redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col">

      <Toaster />
      {/* <div className=""> */}
      <div className="flex h-[calc(100vh-theme(spacing.32))] flex-col items-center justify-center">
      {/* <div className="flex flex-col min-h items-center justify-center"> */}

        {/* <div data-theme="light" className="p-5">
          {session ?
            <div>
              <p> Welcome back: {session?.user.email} </p>
            </div>
            :
            <div>
            </div>
          }
        </div> */}


        <div className="flex-grow"> </div>
        <div className="flex flex-row w-full gap-10 justify-start">
          <Image src={imgGDPR} alt="" width={100} height={100}/>
          <Image src={imgHipaa} alt="" width={100} height={100}/>
          <Image src={imgDigital} alt="" width={100} height={100}/>
        </div>

      </div>
    </main>
  )
}
