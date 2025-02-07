import { AnimatePresence, motion } from "framer-motion"

const TransitionWrapper = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, translateY: "0px" }}
                exit={{ opacity: 0, translateY: "0px" }}
                animate={{ opacity: 1, translateY: "10px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default TransitionWrapper