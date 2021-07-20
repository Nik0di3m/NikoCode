import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/solid'
const ServicesCard = ({ text, image }) => {
    return (
        <div className="shadow-2xl w-64 h-80 flex flex-col justify-around items-center rounded-xl p-4 mt-14 lg:mt-0 md:m-10">
            <div>
                <Image src={image} width={100} height={100} />
            </div>
            <div className="w-2/5 text-center font-medium dark:text-secondary">
                <h3>{text}</h3>
            </div>
            <div className="w-full flex items-center text-orange cursor-pointer hover:scale-105 transition duration-200">
                View more <ArrowRightIcon className='h-6 ml-2' />
            </div>
        </div>
    )
}

export default ServicesCard
