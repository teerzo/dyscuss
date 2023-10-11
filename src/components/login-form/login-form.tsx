'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { LoginButton } from '@/components/login-button/login-button'

// import { Button } from '@/components/ui/button'
// import { IconSpinner } from '@/components/ui/icons'
// import { Input } from './ui/input'
// import { Label } from './ui/label'
import Link from 'next/link'
import { toast, Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface LoginFormProps extends React.ComponentPropsWithoutRef<'div'> {
    action: 'sign-in' | 'sign-up'
}

export function LoginForm({
    className,
    action = 'sign-in',
    ...props
}: LoginFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setError] = useState('');

    const [isRegistered, setRegistered] = useState(false);

    const router = useRouter()
    // Create a Supabase client configured to use cookies
    const supabase = createClientComponentClient()

    const [formState, setFormState] = useState<{
        email: string
        password: string
        first_name: string,
        last_name: string,
        hospital: string,
        speciality: string,
        access_code: string,
        consent_hcp: boolean,
        consent_ipsen: boolean,
        consent_terms: boolean,
    }>({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        hospital: '',
        speciality: '',
        access_code: '',
        consent_hcp: false,
        consent_ipsen: false,
        consent_terms: false,
    })

    const signIn = async () => {
        const { email, password } = formState
        console.log('sign-in', email, password);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        toast.success('Signing in...')


        return error
    }

    const signUp = async () => {
        const { email, password, first_name, last_name, hospital, speciality, access_code, consent_hcp, consent_ipsen, consent_terms } = formState
        console.log('sign-up', email, password, formState);
        const { error, data } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
                data: {
                    first_name,
                    last_name,

                    hospital,
                    speciality,
                    access_code,

                    consent_hcp,
                    consent_ipsen,
                    consent_terms,
                }
            }
        })

        if (!error && !data.session) {
            console.log('Check your inbox to confirm your email address!')
            toast.success('Check your inbox to confirm your email address!')
            setRegistered(true);
        }
        return error
    }

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()
        setIsLoading(true)

        const error = action === 'sign-in' ? await signIn() : await signUp()

        if (error) {
            console.log('error', error);
            setIsLoading(false);
            setError(error.message);
            console.log(error.message)
            toast.error(error.message)
            formState.password = '';
            return
        }

        setIsLoading(false)
        router.refresh()
    }

    return (
        <div data-theme="light" className='p-10' {...props}>
            {/* <Toaster /> */}
            {!isRegistered ?
                <>
                    <div className='mb-5 text-center prose'>
                        {action === 'sign-up' ?

                            <h2> Healthcare professional registration </h2>
                            :

                            <h2> Healthcare professional login </h2>
                        }
                    </div>


                    <form onSubmit={handleOnSubmit}>

                        {hasError ?
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{hasError}</span>
                            </div>
                            : ''}


                        <fieldset className="flex flex-col gap-y-4 items-center">

                            {action === 'sign-up' ?
                                <>
                                    <div className='flex flex-row gap-4'>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">First name*</span>
                                            </label>
                                            <input name="first_name" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.first_name} onChange={e => {
                                                setError('')
                                                setFormState(prev => ({
                                                    ...prev,
                                                    first_name: e.target.value
                                                }))
                                            }
                                            } />
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Last name*</span>
                                            </label>
                                            <input name="last_name" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.last_name} onChange={e => {
                                                setError('')
                                                setFormState(prev => ({
                                                    ...prev,
                                                    last_name: e.target.value
                                                }))
                                            }
                                            } />
                                        </div>

                                    </div>
                                    <div className='flex flex-row gap-4'>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Hospital/Clinic name*</span>
                                            </label>
                                            <input name="hospital" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.hospital} onChange={e => {
                                                setError('')
                                                setFormState(prev => ({
                                                    ...prev,
                                                    hospital: e.target.value
                                                }))
                                            }
                                            } />
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Speciality</span>
                                            </label>
                                            <input name="speciality" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.speciality} onChange={e => {
                                                setError('')
                                                setFormState(prev => ({
                                                    ...prev,
                                                    speciality: e.target.value
                                                }))
                                            }
                                            } />
                                        </div>
                                    </div>

                                    <div className='flex flex-row gap-4'>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Email:</span>
                                            </label>
                                            <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.email} onChange={e => {
                                                setError('')
                                                setFormState(prev => ({
                                                    ...prev,
                                                    email: e.target.value
                                                }))
                                            }
                                            } />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Password:</span>
                                            </label>
                                            <input name="password" type="password" placeholder="Type here" className="input input-bordered w-full" value={formState.password} onChange={e => {
                                                setError('')
                                                setFormState(prev => ({
                                                    ...prev,
                                                    password: e.target.value
                                                }))
                                            }
                                            } />
                                        </div>
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Access code*</span>
                                        </label>
                                        <input name="access_code" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.access_code} onChange={e => {
                                            setError('')
                                            setFormState(prev => ({
                                                ...prev,
                                                access_code: e.target.value
                                            }))
                                        }
                                        } />
                                    </div>

                                    <div className="form-control w-full">

                                        <div className="form-control">
                                            <label className="label justify-start cursor-pointer">
                                                <input name="consent_hcp" type="checkbox" className="checkbox mr-5" checked={formState.consent_hcp} onChange={e => {
                                                    setError('')
                                                    setFormState(prev => ({
                                                        ...prev,
                                                        consent_hcp: e.target.checked
                                                    }))
                                                }} />
                                                <span className="label-text">I confirm i am an Australian Healthcare Professional.*</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-control w-full">
                                        <div className="form-control">
                                            <label className="label justify-start cursor-pointer">
                                                <input name="consent_ipsen" type="checkbox" className="checkbox mr-5" checked={formState.consent_ipsen} onChange={e => {
                                                    setError('')
                                                    setFormState(prev => ({
                                                        ...prev,
                                                        consent_ipsen: e.target.checked
                                                    }))
                                                }} />
                                                <span className="label-text">
                                                    <span className='font-bold'>Communications Consent:</span>
                                                    I agree to receive communications from Ipsen via email, print and/or SMS about Ipsen’s products in the following areas:
                                                    branded product communication, new or updated TGA registrations and/or PBS listings and scientific and/or medical education activities.
                                                    <br />
                                                    The data you provide in this form will be processed in accordance with the
                                                    <a className='underline text-primary' target="_blank" href="https://www.ipsen.com/aus/privacy-policy/" rel="noopener noreferrer">
                                                        Ipsen Data Privacy Policy
                                                    </a>
                                                    that you hereby consent to.
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-control w-full">
                                        <div className="form-control">
                                            <label className="label justify-start cursor-pointer">
                                                <input name="consent_terms" type="checkbox" className="checkbox mr-5" checked={formState.consent_terms} onChange={e => {
                                                    setError('')
                                                    setFormState(prev => ({
                                                        ...prev,
                                                        consent_terms: e.target.checked
                                                    }))
                                                }} />
                                                <span className="label-text">
                                                    I confirm that i have read and agree to the
                                                    <a className='underline' href="/terms-and-conditions">Terms of use,</a>
                                                    <a className='underline' href="/privacy"> Privacy Policy </a>
                                                    and
                                                    <a className='underline' href="/privacy#cookies"> Cookie Policy </a>
                                                    .*
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                </>
                                : <>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email:</span>
                                        </label>
                                        <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" value={formState.email} onChange={e => {
                                            setError('')
                                            setFormState(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }
                                        } />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Password:</span>
                                        </label>
                                        <input name="password" type="password" placeholder="Type here" className="input input-bordered w-full" value={formState.password} onChange={e => {
                                            setError('')
                                            setFormState(prev => ({
                                                ...prev,
                                                password: e.target.value
                                            }))
                                        }
                                        } />
                                    </div>

                                </>}



                        </fieldset>

                        <div className='mt-4 flex flex-row justify-center'>
                            <LoginButton>  {action === 'sign-in' ? 'Sign in' : 'Sign up'} </LoginButton>
                        </div>

                        <div className="divider"></div>

                        {/* <div className='mt-4 flex flex-row justify-center'> 
                    
                    <button> GOOGLE </button>
                </div> */}

                        <div className="mt-2 flex flex-row justify-center">


                            {/* <button> Submit button i guess lmao </button> */}
                            {/* <Button disabled={isLoading}>
                        {isLoading && <IconSpinner className="mr-2 animate-spin" />}
                        {action === 'sign-in' ? 'Sign In' : 'Sign Up'}
                    </Button> */}
                            <p className="ml-4">
                                {action === 'sign-in' ? (
                                    <>
                                        Don&apos;t have an account?{' '}
                                        <Link href="/sign-up" className="font-medium underline">
                                            Sign Up
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{' '}
                                        <Link href="/sign-in" className="font-medium underline">
                                            Sign In
                                        </Link>
                                    </>
                                )}
                            </p>
                        </div>
                    </form>

                </>
                :
                <>
                    <div>
                        Check yo inbox
                    </div>
                </>
            }
        </div >
    )
}