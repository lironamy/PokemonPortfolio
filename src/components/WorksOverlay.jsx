import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Scroll } from "@react-three/drei";
import  { BaliPashut, Wedding, HolidayPicker }  from "../assets";



const Section = (props) => {
    return (
      <section
        className={`h-screen flex flex-col justify-center ${
          props.right ? "items-end" : "items-start"
        }`}
        style={{
          opacity: props.opacity,
        }}
      >
        <div className="w-1/2 flex items-center justify-center mobileCard">
          <div className="max-w-sm w-full">
            <div className="bg-black-100 rounded-lg px-4 py-8">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    );
  };
  


export const WorksOverlay = (props) => {

    const [opacityLastSection, setOpacityLastSection] = useState(0);


  return (
    <Scroll html>
    <div className="flex flex-wrap">
        <div className="fixed top-40 left-28">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] workText'
                >
                These projects showcases my skills and experience with real-world examples.
                Each project includes descriptions, 
                code repositories, and live demos, 
                showcasing my problem-solving abilities, 
                diverse technology expertise, and project management proficiency.
                </motion.p>
            </div>
        </div>
        
    </div>
    <div class="w-screen">
        <Section opacity={opacityLastSection}>
          
        </Section>
        <Section right >
          <img
            src={BaliPashut}
            alt="Bali Pashut"
            className="rounded-lg mb-5"
          />
          <h1 className="text-2xl text-secondary">
          Bali Pashut
          </h1>
          <p className="text-white">A simple and elegant website
            using Three.js, showcasing
            and selling cookies
          </p>
          <div className="flex justify-around">
            <button className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <a target="_blank" href="https://github.com/lironamy/bali-pashut">Code</a>
            </button>
            <button className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <a target="_blank" href="https://lironamy.github.io/bali-pashut/">Live</a>
            </button>
          </div>
        </Section>

        <Section >
        <img
            src={Wedding}
            alt="Wedding"
            className="rounded-lg mb-5"
          />
          <h1 className="text-2xl text-secondary">
          Liron-Ola Wedding
          </h1>
          <p className="text-white">A beautifully designed
            wedding website for sending
            invitations and RSVPs
          </p>
          <div className="flex justify-around">
            <button className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <a target="_blank" href="https://github.com/lironamy/wedding">Code</a>
            </button>
            <button className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <a target="_blank" href="https://liron-ola.online/#/wedding">Live</a>
            </button>
          </div>
        </Section>
        <Section right>
        <img
            src={HolidayPicker}
            alt="Holiday Picker"
            className="rounded-lg mb-5"
          />
          <h1 className="text-2xl text-secondary">
          Holiday Picker
          </h1>
          <p className="text-white">An online tool for choosing
            holidays.
            <br></br>
            it's using React, TypeScript, Node.js, Express.js, Sql, and more
          </p>
          <div className="flex justify-around">
            <button className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <a target="_blank" href="https://github.com/lironamy/HolidayPicker">Code</a>
            </button>
            <button className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <a target="_blank" href="https://holidaypicker.online/">Live</a>
            </button>
          </div>
        </Section>
      </div>

      

    </Scroll>
    


  );
};

// export default WorksOverlay ;
