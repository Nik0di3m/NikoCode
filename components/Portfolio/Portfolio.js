import { wrap } from '@popmotion/popcorn'
import { useState } from 'react'
import { data } from './data'
import Image from 'next/image'
import Slider from './Slider'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import Button from '../Button/Button'
const Portfolio = () => {
    const items = data
    const [[slide, direction], setSlide] = useState([0, 0])
    const slideIndex = wrap(0, items.length, slide)
    const paginate = (newDirection) => {
        setSlide([slide + newDirection])
    }
    return (
        <section className="flex flex-col p-4 mt-16 lg:w-11/12 lg:mx-auto" id="portfolio">
            <div className="text-center">
                <h2 className="text-3xl">Portfolio</h2>
                <h3 className="text-xl font-light">Most recent work</h3>
            </div>
            <div className="flex justify-between ">
                <motion.div className="bg-transparent inline-flex text-orange justify-center items-center cursor-pointer" onClick={() => paginate(-1)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.5 }}
                >
                    <ChevronLeftIcon className="h-8" />
                </motion.div>
                <div className="overflow-hidden h-[80vh] md:h-[50vh] lg:h-82 shadow-2xl rounded-2xl mt-6 lg:flex lg:items-center">
                    <AnimatePresence exitBeforeEnter>
                        {items
                            .filter((_, iterator) => iterator === slideIndex)
                            .map(item => (
                                <motion.div
                                    key={item.id}
                                    initial={{ x: 1500 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: -1500 }}
                                    drag='x'
                                    onDragEnd={(event, info) => {
                                        console.log(info.point.x)
                                        if (info.point.x < 1000) {
                                            paginate(1)
                                        } else {
                                            paginate(-1)
                                        }
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring"
                                    }}
                                    className="flex w-full flex-col lg:h-82 lg:flex-row justify-around overflow-hidden items-center">
                                    <motion.div className="flex items-center w-[95%] lg:w-2/4 justify-center">
                                        {/* image */}
                                        <Image priority src={item.image} width={500} height={300} objectFit="contain" alt={item.title} />
                                    </motion.div>
                                    <motion.div className="flex w-[95%] items-center lg:items-start lg:min-w-[500px] lg:w-2/4 lg:p-12 h-full flex-col">
                                        {/* rightcontainer */}
                                        <motion.div className="text-center lg:text-left lg:w-3/4">
                                            <h3 className="mb-6 text-xl">{item.title}</h3>
                                            <p className="font-light">
                                                {item.content}
                                            </p>
                                        </motion.div>
                                        <motion.div className="flex justify-center w-full lg:justify-start">
                                            <Button text="Try Demo!" style="w-36 mt-8 shadow-xl" color="bg-orange text-light" link={item.link} target="_blank" />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
                <motion.div className="bg-transparent inline-flex text-orange justify-center items-center cursor-pointer" onClick={() => paginate(1)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.5 }}
                >
                    <ChevronRightIcon className="h-8" />
                </motion.div>
            </div>
            <div className="flex justify-center mt-3">
                <div className='flex justify-between lg:w-auto'>
                    {items.map((item, iterator) => (
                        <motion.div
                            key={item.id}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.5 }}
                            className={`h-4 w-4 ml-2 mr-2 mt-2 cursor-pointer rounded-full ${iterator === slideIndex ? 'bg-orange' : 'bg-bgdark'}`} onClick={() => setSlide([iterator, 0])} />
                    ))}
                </div>
            </div>


        </section>
    )
}

export default Portfolio
