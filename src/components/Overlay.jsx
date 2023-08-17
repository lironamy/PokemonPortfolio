import React, { useRef, useLayoutEffect } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Scroll } from "@react-three/drei";


export const Overlay = (props) => {

      

    return (
        <Scroll html>
        <div className="flex flex-wrap" id="aboutSec">
            <div className="w-full ml-40 about-text">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>About</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
    
            <motion.p
                variants={fadeIn("", "", 0.5, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] about-text "
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
            </div>

            
        </div>
        </Scroll>
    )
}
