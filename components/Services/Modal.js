import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import ModalItems from "./ModalItems"

const variants = {
    open: {
        opacity: 1,
        backdropFilter: 'blur(10px)'

    },
    closed: {
        opacity: 0,
    }
}

const Modal = ({ close }) => {
    const [active, setActive] = useState(true)


    const test = () => {
        console.log('test')
    }

    return (
        <AnimatePresence>
            <motion.div className={`w-screen h-screen fixed top-0 left-0 z-50`} onClick={close}>
                <motion.div className="flex w-full h-full justify-center items-center z-50" onClick={() => setActive(!active)}
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={active ? 'open' : 'closed'}
                    variants={variants}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <ModalItems />
                </motion.div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Modal
