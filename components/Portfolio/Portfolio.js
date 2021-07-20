import Button from '../Button/Button'
import Image from "next/image"
const Portfolio = () => {
    return (
        <div className="flex flex-col mt-16">
            <div className="text-center">
                <h2 className="text-3xl">Portfolio</h2>
                <h3 className="text-xl font-light">Most recent work</h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-around overflow-hidden items-center">
                {/* main */}
                <div className="flex items-center w-[95%] lg:w-2/4 justify-center">
                    {/* image */}
                    <Image src="/images/netflix.png" width={500} height={300} objectFit="contain" />
                </div>
                <div className="flex w-[95%] items-center lg:items-start lg:w-2/4 lg:p-12 h-full flex-col">
                    {/* rightcontainer */}
                    <div className="w-[95%] text-center lg:text-left lg:w-3/4">
                        <h3 className="mb-6 text-xl">Netflix Clone</h3>
                        <p className="font-light">
                            Website adoptable to all devices, with ui copmonents. Making in Next.js with Firebase backend. For animation i used a Framer Motion
                        </p>
                    </div>
                    <div className="flex justify-center w-full lg:justify-start">
                        <Button text="Try Demo!" style="w-36 mt-8" color="bg-orange text-light" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <div className='flex justify-between w-1/5 lg:w-[5%]'>
                    <div className="h-4 w-4 rounded-full bg-orange" />
                    <div className="h-4 w-4 rounded-full bg-bgdark" />
                    <div className="h-4 w-4 rounded-full bg-bgdark" />
                </div>
            </div>

        </div>
    )
}

export default Portfolio
