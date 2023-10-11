
'use client'

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Cookies() {

    const ref = useRef<HTMLDialogElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const lsKey = 'dyscuss.modal';

    const defaultCookies = {
        essential: true,
        marketing: false,
        functional: false,
        analytics: false,
    }

    const [cookies, setCookies] = useState(defaultCookies);

    useEffect(() => {
        const data = window.localStorage.getItem(lsKey);
        const _cookies = data ? JSON.parse(data) : defaultCookies;

        setCookies(_cookies);
    },[])


    useEffect(() => {
        console.log('searchParams', searchParams);
        if (searchParams.get('cookies')) {

            ref.current?.showModal();
        }
        else {
            ref.current?.close();
        }
    }, [searchParams])

    function closeModal() {
        router.push(`${pathname}`);
    }

    function saveModal() {
        window.localStorage.setItem(lsKey, JSON.stringify(cookies));
        router.push(`${pathname}`);
    }


    return (
        <>
            <dialog ref={ref} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="font-bold text-lg">Advanced Cookie Settings</h3>
                        <button className="btn btn-square btn-ghost" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p className="py-4">Press ESC key or click the button below to close</p>

                    <div className="flex flex-row justify-between items-start mb-2">
                        <div className="flex flex-col pr-5">
                            <p> Essential Cookies </p>
                            <p className="text-xs"> These cookies enable core functionality such as security, verification of identity and network management. These cookies can’t be disabled.</p>
                        </div>
                        <input type="checkbox" className="toggle mr-5" checked={cookies.essential} onChange={e => {}}/>
                    </div>

                    <div className="flex flex-row justify-between items-start mb-2">
                        <div className="flex flex-col pr-5">
                            <p> Enable Marketing Cookies </p>
                            <p className="text-xs"> These cookies are used to track advertising effectiveness to provide a more relevant service and deliver better ads to suit your interests. </p>
                        </div>
                        <input type="checkbox" className="toggle mr-5" checked={cookies.marketing} onChange={e => {
                            setCookies(prev => ({
                                ...prev,
                                marketing: e.target.checked
                            }))}}/>
                    </div>
                    <div className="flex flex-row justify-between items-start mb-2">
                        <div className="flex flex-col pr-5">
                            <p> Enable Functional Cookies </p>
                            <p className="text-xs"> These cookies collect data to remember choices users make to improve and give a more personalised experience. </p>
                        </div>
                        <input type="checkbox" className="toggle mr-5" checked={cookies.functional} onChange={e => {
                            setCookies(prev => ({
                                ...prev,
                                functional: e.target.checked
                            }))}}/>
                    </div>
                    <div className="flex flex-row justify-between items-start mb-2">
                        <div className="flex flex-col pr-5">
                            <p> Enable Analytics Cookies </p>
                            <p className="text-xs"> These cookies help us to understand how visitors interact with our website, discover errors and provide a better overall analytics. </p>
                        </div>
                        <input type="checkbox" className="toggle mr-5" checked={cookies.analytics} onChange={e => {
                            setCookies(prev => ({
                                ...prev,
                                analytics: e.target.checked
                            }))}}/>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={saveModal}>Save</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}