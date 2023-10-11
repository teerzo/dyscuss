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
      <div className="flex h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-10">

        {session ?
          <div>
            <p> Welcome back: {session?.user.email} </p>
            {/* <Link href="/logout"> <button className="btn"> LOG OUT </button> </Link> */}
          </div>
          :
          <div>
            {/* <p> Not signed in </p> */}
            {/* <Link href="/login"> <button className="btn"> LOGIN </button> </Link> */}
          </div>
        }
      </div>
    </main>
  )
}
