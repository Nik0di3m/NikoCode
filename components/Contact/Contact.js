import Image from 'next/image'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
const Contact = () => {
    return (
        <div className="flex flex-col items-center mt-12 lg:mt-16">
            <h2 className="text-3xl">Get In Touch</h2>
            <div className="flex flex-col-reverse items-center lg:flex lg:flex-row w-[95%] lg:w-10/12 lg:justify-around mt-8">
                {/* main */}
                <div className="flex flex-col justify-between items-center lg:w-2/5">
                    <div className="flex flex-col h-full justify-around">
                        {/* email and phone */}
                        <div className="flex items-center mb-6">
                            <MailIcon className='h-12 w-12 text-orange' />
                            <div className="ml-2">
                                <h3 className="text-xl font-medium">Email</h3>
                                <p>norbert.waleszczyk@icloud.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon className="h-12 w-12 text-orange" />
                            <div className="ml-2">
                                <h3 className="text-xl font-medium">Phone</h3>
                                <p>+48 987 654 321</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        {/* image */}
                        <Image src="/images/send.svg" width={350} height={350} />
                    </div>
                </div>
                <div className="lg:w-2/4 text-light">
                    {/* form */}
                    <form className="flex flex-col items-center mb-4 md:inline-block lg:inline-block lg:mb-0">
                        <input type="text" placeholder="Name:" className="rounded-2xl bg-orange p-[3px] w-full placeholder-light outline-none mb-2 pl-2" />
                        <input type="email" placeholder="Email:" className="rounded-2xl bg-orange p-[3px] w-full placeholder-light outline-none mb-2 pl-2" />
                        <input type="text" placeholder="Topic:" className="rounded-2xl bg-orange p-[3px] w-full placeholder-light outline-none mb-2 pl-2" />
                        <textarea type="text" placeholder="Messege:" style={{ height: '22rem' }} className="rounded-2xl bg-orange p-[3px] w-full placeholder-light outline-none mb-2 pl-2 h-80 resize-none" />
                        <button type="submit" className="bg-orange p-2 w-36 rounded-2xl hover:scale-110 duration-200">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
