import { auth } from '@/app/auth/auth';
import { cookies } from 'next/headers'

export default async function PrivacyPage() {
    const cookieStore = cookies()
    const session = await auth({ cookieStore })

    return (
        <div className="flex flex-col w-full min-h-screen">

            <div data-theme="light" className='prose container p-10'>
                <h2 className='text-center'> Terms and Conditions </h2>


                <p>
                    1. Acceptance <br />
                    This website (“Website”) has been developed by NeuroEd Pty Ltd on behalf of Ipsen Pty Ltd located at Level 5, 627 Chapel Street, South Yarra, Victoria 3141, Australia (hereafter, together with its affiliates, referred to as “Ipsen”). Your access to and use of the Website is subject to the following Terms and Conditions and all applicable laws. By accessing the Website, you accept, without limitation or qualification, these Terms and Conditions.
                </p>

                <p>
                    2. Use of information <br />
                    The Website is an Ipsen-owned website that provides general information regarding Ipsen and its products and services. This Website has been designed for Australian registered healthcare professionals and the information provided is to enhance the quality use of medicines.
                    You may not distribute, modify, transmit, reuse, repost, or use any of the information on the Website for commercial purposes, and should assume that everything you see or read on this Website is protected by copyright unless otherwise noted, and may not be used except as provided in these Terms and Conditions.
                    Except as otherwise permitted in this paragraph, Ipsen neither warrants nor represents that your use of materials displayed on the Website will not infringe rights of third parties not owned by or affiliated with Ipsen. With the exception of the foregoing limited authorization, no license to or right in the information, or any copyright of Ipsen or of any other party is granted or conferred to you.
                    This Website may contain or reference proprietary information, technologies, products, processes or other proprietary rights of Ipsen and/or other parties. No license to or right in any such trademarks, patents, trade secrets, technologies, products, processes and other proprietary rights of Ipsen and/or other parties is granted to or conferred upon you.
                </p>

                <p>
                    3. Disclaimer of warranties <br />
                    While Ipsen uses reasonable efforts to ensure that the information in the Website is accurate and up to date, such information may contain inaccuracies or typographical errors. Ipsen reserves the right to make changes, corrections and/or improvements to the information at any time without notice. Ipsen makes no warranties or representations as to the accuracy of any of the information, and assumes no liability or responsibility for any errors or omissions in the content of the Website.
                    ALL INFORMATION IS PROVIDED “AS IS.” IPSEN PROVIDES NO WARRANTIES ABOUT THE COMPLETENESS OR ACCURACY OF THE INFORMATION ON THIS WEBSITE OR ITS POSSIBLE USES. CONSEQUENTLY, THE INFORMATION SHOULD BE CAREFULLY EVALUATED BY USERS BEFORE USE. YOU MAY USE THIS INFORMATION AT YOUR OWN DISCRETION AND RISK. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IPSEN, ANY OTHER IPSEN GROUP COMPANY, AND ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING OR DELIVERING THIS WEBSITE TO YOU DISCLAIM ANY WARRANTIES OR LIABILITY FOR ANY DIRECT, INCIDENTAL, CONSEQUENTIAL, INDIRECT OR PUNITIVE DAMAGES ARISING OUT OF ACCESS TO, USE OF OR INABILITY TO USE THIS WEBSITE, OR ANY ERRORS OR OMISSIONS IN THE CONTENT OF THE WEBSITE.
                    Ipsen also assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect, your equipment or other property on account of your access to, or use of the information.
                </p>

                <p>
                    4. Information you supply <br />
                    Except for information covered by Ipsen’s Privacy Policy, any communication or material you transmit to the Website, including any data, questions, comments, suggestions or the like is, and will be treated as, non-confidential and non-proprietary.
                </p>

                <p>
                    5. Consequences <br />
                    If Ipsen becomes aware that you have violated any of the Terms and Conditions contained herein, it may immediately take corrective action, including preventing you from using the Website, at any moment and without notice. If Ipsen has been affected or injured by your violation it may, in its sole discretion, seek to recover damages from you.
                </p>

                <p>
                    6. Revisions <br />
                    Ipsen may at any time revise these Terms and Conditions by updating this posting and notifying you by sufficient means (such as an email or a pop-up window in the Website, by which you will be asked to give your consent to the amended version). The revised Terms and Conditions enter into effect within 30 calendar days after such an update. If you disagree with the new Terms and Conditions, you should indicate so through the mechanism provided by the relevant email or pop-up, and subsequently stop accessing and using the Website. You should periodically visit this page to review the current Terms and Conditions to which you are bound.
                    Ipsen reserves the right to discontinue this Website at any time without liability to you or anyone else.
                </p>

                <p>
                    7. Intellectual Property <br />
                    Ipsen does not grant any license or permit regarding its intellectual property rights associated with the Website. All materials contained in the Website may not be reproduced, displayed or further used in any manner whatsoever without the prior written permission of Ipsen.
                </p>

                <p>
                    8. Adverse Events <br />
                    Healthcare professionals, patients and patient organisations are encouraged to report all suspected adverse reactions and product quality complaints to Ipsen Pty Ltd on 1800 317 033 (0800 947 486 from New Zealand) or by emailing medinfo.australia@ipsen.com.
                    Alternatively, suspected adverse reactions can be reported to the Therapeutic Goods Administration (if in Australia) or the Centre for Adverse Reactions Monitoring (if in New Zealand).
                    TGA: www.tga.gov.au/reporting-adverse-events
                    CARM: www.medsafe.govt.nz/safety/report-a-problem.asp
                </p>

                <p>
                    9. Severability <br />
                    The invalidity or unenforceability of any provision of these Terms and Conditions shall not affect the validity or enforceability of any other provision, which shall remain in full force and effect, except where the invalidity or unenforceability relates to an essential term of these Terms and Conditions.
                </p>

                <p>
                    10. Governing Laws <br />
                    These Terms and Conditions and your use of the Website shall be governed by the laws of Victoria, Australia except for the provisions of international private law.
                    Disputes that cannot be solved amicably by the parties will be submitted to the courts and tribunals of Victoria, Australia.
                </p>

            </div>
        </div>
    )
}