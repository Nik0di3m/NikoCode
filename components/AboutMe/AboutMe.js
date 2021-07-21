import Image from "next/image"
import Button from "../Button/Button"
import { DownloadIcon } from "@heroicons/react/solid"
const AboutMe = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            {/* Main container */}
            <h2 className="text-3xl">
                About Me
            </h2>
            <div className="flex-col flex lg:flex-row justify-around items-center">
                <div>
                    {/* image */}
                    <Image src="/images/aboutme.png" width={500} height={500} />
                </div>
                <article className="w-[90%] p-2 text-justify lg:text-left dark:text-secondary items-center lg:w-2/6 h-80 lg:p-4 flex flex-col justify-center lg:items-start break-words">
                    {/* text */}
                    <p className="w-5/6 font-light">
                        Web developer, with passion, knowledge and experience, working in web, mobile developing. Administrator in website and online shop.  Extensive knowledge in React, React Native, Next.js, Firebase, Express.js.
                    </p>

                    <Button
                        text="Download CV"
                        icon={<DownloadIcon className="h-8" />}
                        style="mt-6 shadow-md"
                        color="bg-orange text-light"
                    />
                </article>
            </div>
        </section>
    )
}

export default AboutMe
