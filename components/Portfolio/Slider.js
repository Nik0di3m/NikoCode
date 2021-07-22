import { motion } from 'framer-motion'
import Image from "next/image"
import Button from "../Button/Button"
import { AnimatePresence } from 'framer-motion'
const Slider = ({ data }) => {

    return (
        <motion.div
            className="flex flex-col lg:h-80 lg:flex-row justify-around overflow-hidden items-center">
            <motion.div className="flex items-center w-[95%] lg:w-2/4 justify-center">
                {/* image */}
                <Image src={data.image} width={500} height={300} objectFit="contain" alt={data.title} priority />
            </motion.div>
            <motion.div className="flex w-[95%] items-center lg:items-start lg:min-w-[500px] lg:w-2/4 lg:p-12 h-full flex-col">
                {/* rightcontainer */}
                <motion.div className="text-center lg:text-left lg:w-3/4">
                    <h3 className="mb-6 text-xl">{data.title}</h3>
                    <p className="font-light">
                        {data.content}
                    </p>
                </motion.div>
                <motion.div className="flex justify-center w-full lg:justify-start">
                    <Button text="Try Demo!" style="w-36 mt-8" color="bg-orange text-light" />
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default Slider
