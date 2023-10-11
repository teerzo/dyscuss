import { auth } from '@/app/auth/auth';
import { cookies } from 'next/headers'

export default async function PrivacyPage() {
    const cookieStore = cookies()
    const session = await auth({ cookieStore })

    return (
        <div className="flex flex-col w-full min-h-screen">

            <div data-theme="light" className='prose container p-10'>
                <h2 className='text-center'> Privacy Policy </h2>

                <p> Privacy Policy – dyscuss.com.au is a product produced and managed by NeuroED Pty Ltd on behalf of Ipsen Pty Ltd. </p>

                <p> dyscuss.com.au and NeuroED follow procedures and develop software in accordance with GDPR and HIPAA and Australian digital health data standards and requirements. </p>


                <p> This Privacy Policy describes the ways in which Personal Information about individuals who use this Website (“User”) may be collected, stored and used by Ipsen Pty Ltd located at Level 5, 627 Chapel Street, South Yarra, Victoria 3141, Australia (“Ipsen”, “we”), the data controller.
                    THIS PRIVACY POLICY MAY PERIODICALLY CHANGE, BE MODIFIED, OR OTHERWISE UPDATED WITHOUT PRIOR NOTIFICATION. However, your Personal Information will always be handled in accordance with the Privacy Policy that was in effect at the time of collection.
                    Personal Information Collected:
                    When used in this privacy policy, the term “Personal Information” has the meaning given to it in the Privacy Act 1988 (Cth). In general terms, it is any information that can be used to personally identify you. This may include your name, address, telephone number, email address and profession or occupation. If the information we collect personally identifies you, or you are reasonably identifiable from it, the information will be considered personal information.
                    Ipsen collects Personal Information when you provide us with your name, contact information, location, profession or any other Personal Information, in order to:
                    register to become a User through our Website;
                    report an adverse event or problem with an Ipsen product or other safety surveillance and monitoring purposes; or
                    contact us through the “Contact Us” emails or telephone numbers on our website or through your conversations with our representatives.
                    In limited circumstances, the Personal Information Ipsen collects may include sensitive information about you or another person, including information relating to your health, if this is relevant to your enquiry or your report about an adverse event.
                    You may request that we do not collect your Personal Information in your interactions with us. However, we may not be able to provide you with the information, services or responses you may require.
                    Uses of Personal Information:
                    Ipsen shall use the Personal Information you provide to:
                    Administer, maintain and improve the security and user experience of this Website and allow you to use its features. We will not use the information to create profiles on Users, or to provide targeted advertising, unless you have provided us with your express consent to do so.
                    Administer your account and store your personal preferences.
                    Send you service communications through email (i.e. password changes).
                    Send you further information about our Products and other direct marketing messages, where you have provided your consent to receive these messages.
                    Update our records and keep your contact details up to date and other business and administrative purposes.
                    Process and respond to any complaint made by you.
                    Monitor adverse events in respect of our products, including to process and respond to any adverse event reported by you.
                    Comply with any law, rule, regulation, lawful and binding determination, decision or direction of a regulator, or in co-operation with any governmental authority of any country.
                    Your Personal Information will not be sold, shared or otherwise distributed to third parties without your consent, except where we are required to do so because of an applicable law, court order or governmental regulation, or if such disclosure is otherwise necessary in support of any criminal or other legal investigation or proceeding here or abroad.
                    In addition to Ipsen’s staff, we may share your Personal Information with a third party where required to do so to fulfil the purpose for collection.
                    This includes to our affiliates, suppliers, contractors or service providers for the purposes of our business activities, fulfilling requests by you, and to otherwise provide products and services to you, such as, without limitation, web hosting providers, IT systems administrators, mailing houses, couriers, payment processors, data entry service providers, electronic network administrators, debt collectors, and professional advisors such as accountants, solicitors, business advisors.
                    Disclosure outside of Australia
                    We may disclose your Personal Information to our related bodies corporate and third party suppliers and service providers located overseas for some of the purposes listed above, including to our affiliates located in the European Union.
                    We take reasonable steps to ensure that the overseas recipients of your personal information will comply with obligations equivalent to the requirements set out in the Australian Privacy Act 1988 (Cth).
                    Important Information
                    You are responsible for maintaining the secrecy of your unique password and account information. You must immediately contact us at privacyofficer.au@ipsen.com if you suspect that your account credentials or information has been lost or subject to unauthorised access.
                    We take reasonable steps to ensure your Personal Information is protected from misuse and loss and from unauthorised access, modification or disclosure. Personal information is destroyed or de-identified when no longer needed.
                    As our websites are linked to the internet, and the internet is inherently insecure, we cannot provide any assurance regarding the security of transmission of information you communicate to us online. We also cannot guarantee that the information you supply will not be intercepted while being transmitted over the internet. Accordingly, any personal information or other information which you transmit to us online is transmitted at your own risk.
                    Our websites may contain links to other websites operated by third parties. We make no representations or warranties in relation to the privacy practices of any third party websites and we are not responsible for the privacy policies or the content of any third party website. Third party websites are responsible for informing you about their own privacy practices.
                    When registering as a User, we clearly label which information is required for registration, and which information is optional and may be given at your discretion. Your Personal Information will be stored on secure servers and be maintained strictly confidential.
                    Right of Access, Correction and Objection
                    You have a right of access, correction and objection to the use of your Personal Information. If you wish to contact us regarding our use of your Personal Information or object to the processing of your Personal Information, please email us at privacyofficer.au@ipsen.com.
                    If you contact us, please indicate the specific information you would like us to verify, correct, update or delete. We will consider and process your requests subject to any applicable legal and ethical reporting or document filing or retention obligations imposed on us. In this case, you will be informed about this and your Personal Information will only be retained to meet those purposes.
                    In addition, you may receive a copy of the Personal Information relating to you and information regarding our processing of such personal information by applying to Ipsen in writing using the address set out above. In such case, we will provide your Personal Information to you in a commonly used data format. Further, you have the right to lodge a complaint to the data protection authority or similar body within your jurisdiction.
                    If you have any queries regarding the processing of your Personal Information, please write to privacyofficer.au@ipsen.com. </p>



                <p> Cookies </p>
                <p>
                    A “cookie” is a small text file containing information which is stored on your computer. Providing some information is optional. If you choose not to enter access to use strictly-necessary cookies, we’ll be unable to facilitate essential tasks on the website, like helping users to navigate between pages in an efficient way and keeping the site functioning securely and efficiently.
                    This Website uses the following types of cookies:
                    <br/>
                    Strictly necessary cookies:These cookies are essential in order to enable you to move around the Website securely and use its features.
                    <br/>
                    Performance cookies:These cookies collect information analytics about how visitors use the Website, for instance which pages visitors go to most often, and if they get error messages from the Website. This includes analytics cookies generated by Google Analytics.
                    <br/>
                    These types of cookies do not collect information that directly identifies Users, but instead make use of numbers and codes. This information is solely used to administer the Website and improve the User experience. The information is not used to create profiles on Users, or to provide targeted advertising.
                    By visiting this Website you agree to the use of performance cookies on your device.
                </p>
            </div>
        </div>
    )
}