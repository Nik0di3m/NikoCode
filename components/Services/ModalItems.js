import { motion } from "framer-motion"
import { modalData } from "./data"

const ModalItems = ({ number }) => {

    return (
        <motion.div className="border-[1px] border-orange shadow-2xl flex text-justify justify-center items-center bg-light dark:bg-dark rounded-3xl p-4 w-[85%] lg:w-1/5 h-1/2">
            <div>
                {modalData[number].text}
            </div>
        </motion.div>
    )
}

export default ModalItems
