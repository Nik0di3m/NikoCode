import Image from "next/image"
import Button from '../Button/Button'
import { PaperAirplaneIcon } from '@heroicons/react/solid';
const NewProject = () => {
    return (
        <section className="flex flex-col bg-orange rounded-3xl p-4 mt-20 text-light lg:flex-row justify-evenly w-11/12 mx-auto">
            <div className="flex flex-col justify-center lg:w-2/6">
                {/* text */}
                <h2 className="text-3xl font-medium">Do you have a new project?</h2>
                <p className="text-lg mt-6">Contact me now and get 30% discount on your new project!</p>
                <Button
                    text="Contact Me"
                    color="bg-light text-orange"
                    icon={<PaperAirplaneIcon className="h-8 w-8 rotate-90" />}
                    style="w-44 font-medium mt-6"
                    link="#contact"
                />
            </div>
            <div className="flex justify-center mt-12 lg:mt-0">
                {/* image */}
                <Image src="/images/success.png" width={350} height={350} objectFit='contain' alt="New project hurry!" />
            </div>

        </section>
    )
}

export default NewProject
