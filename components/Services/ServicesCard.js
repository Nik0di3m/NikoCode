import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Modal from './Modal'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
const ServicesCard = ({ text, image, alt, number }) => {
    const [active, setActive] = useState(false)
    const close = () => {
        setTimeout(() => {
            setActive(!active)
        }, 500)
    }
    return (
        <article className="shadow-2xl border-[1px] border-orange w-64 h-80 flex flex-col justify-around items-center rounded-xl p-4 mt-14 lg:mt-0 md:m-10">
            <div>
                <Image src={image} width={100} height={100} alt={alt} />
            </div>
            <div className="w-2/5 text-center font-medium dark:text-secondary">
                <h3>{text}</h3>
            </div>
            <div className="w-full flex items-center text-orange cursor-pointer hover:scale-105 transition duration-200" onClick={() => setActive(!active)}>
                View more <ArrowRightIcon className='h-6 ml-2' />
            </div>
            {active && <Modal close={close} number={number} />}

        </article>
    )
}

export default ServicesCard
