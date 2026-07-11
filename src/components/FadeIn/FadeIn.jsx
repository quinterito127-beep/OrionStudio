import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    x = 0,
    y = 100,
}) {

    return (

        <motion.div

            initial={{
                opacity: 0,
                x: x,
                y: y,
            }}

            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}

            viewport={{
                once: true,
                amount: 0.25,
            }}

            transition={{
                duration: 1.3,
                delay: delay,
                ease: "easeOut",
            }}

        >

            {children}

        </motion.div>

    );

}