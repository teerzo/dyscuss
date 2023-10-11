
"use client"

import { useEffect, useState } from 'react';
import { FaUserAlt, FaSkullCrossbones, FaSpider, FaUserAstronaut } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from '../../theme-provider';

type Themes = "rebel" | "light" | "imperial" | "dark";

import { cookies } from 'next/headers';
import { Session } from '@supabase/supabase-js';


export default function Navbar({ env, session }: { env: string, session: Session | null }) {
    const { theme, setTheme } = useTheme();

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-sm lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96 text-primary">
                        <div className='prose'>
                            <h4> Health Care Professional Members </h4>
                        </div>
                        {/* <li className='mb-2'>
                            <Link href="/tools" className='text-lg'> Tools </Link>
                        </li> */}

                        <li className='mb-2'>
                            <div className="text-lg"> Home </div>
                        </li>

                        <li className='mb-2'>
                            <div className="text-lg"> Case Creator </div>
                        </li>

                        <li className='mb-2'>
                            <div className="text-lg"> Resources </div>
                        </li>

                        {/* <span> {session?.user ? <> Logged in </> : <> Logged out </>} </span> */}

                    </ul>
                </div>
                <Link href="/" className="text-primary">
                    <div className="btn btn-ghost text-md lg:text-lg">
                        Dyscuss {env === 'development' ? <small> DEV </small> : <> </>}
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='mr-5'>
                    <h3> Health Care Professional Members </h3>
                </div>

                <Link href="/">
                    <div className="btn m-1"> Home </div>
                </Link>
                <Link href="/case-creator">
                    <div className="btn m-1"> Case Creator </div>
                </Link>
                <Link href="/resources">
                    <div className="btn m-1"> Resources </div>
                </Link>
                {/* <span> {session?.user ? <> Logged in </> : <> Logged out </>} </span> */}
            </div>


            <div className="navbar-end hidden lg:flex">

                {session?.user ?
                    <div className="dropdown dropdown-end mr-2">
                        <label tabIndex={0} className="btn btn-circle avatar">
                            <div className="w-10 rounded-full icon">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>

                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
                            <li>
                                <a className="justify-between opacity-20">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li><a className='opacity-20'>Settings</a></li>
                            <li><a className="" href="/sign-out" >Sign out</a></li>
                        </ul>

                    </div>
                    :
                    <div className="">
                        <Link href="/sign-in">
                            <button className="btn mr-2"> Sign in </button>
                        </Link>
                        {/* <label tabIndex={0} className="btn btn-circle">

                            <div className="flex flex-col justify-center items-center w-10 rounded-full text-center">
                                <FaUserAlt />

                            </div>
                        </label> */}
                    </div>
                }

            </div>
            <div className="navbar-end lg:hidden">
                {session?.user ?
                    <div className="dropdown dropdown-end mr-2">
                        <label tabIndex={0} className="btn btn-circle avatar">
                            <div className="w-10 rounded-full icon">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>

                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
                            <li>
                                <a className="justify-between opacity-20">
                                    Profile
                                </a>
                            </li>
                            <li><a className='opacity-20'>Settings</a></li>
                            <li><a className="" href="/sign-out" >Sign out</a></li>
                        </ul>

                    </div>
                    :
                    <div className="">
                        <Link href="/sign-in">
                            <button className="btn mr-2"> Sign in </button>
                        </Link>
                        <label tabIndex={0} className="btn btn-circle">

                            <div className="flex flex-col justify-center items-center w-10 rounded-full text-center">
                                <FaUserAlt />

                            </div>
                        </label>
                    </div>
                }
            </div>
        </div >
    )
}
