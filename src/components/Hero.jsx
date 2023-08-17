import React, { useEffect, useRef,useState } from "react";
import { styles } from "../styles";
import { Rayquaza } from "../assets";
import { motion } from "framer-motion";
import { Loader } from "../components";



const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Rayquaza;
    img.decode?.(); 
    img.onload = () => setLoaded(true);
  }, []);

  const rainContainerRef = useRef(null);

  useEffect(() => {
    const rainContainer = rainContainerRef.current;
    if (!rainContainer) return; // Check if the ref is available

    const dropCount =5; // Adjust the number of raindrops as needed

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement("div");
      drop.classList.add("drop");
      rainContainer.appendChild(drop);
      drop.style.left = `${Math.random() * 100}%`; // Randomize the horizontal position
      drop.style.animationDelay = `${Math.random() * 2}s`; // Add random delay to the animation start
    }
  }, []);
  



  return (
    <>

<section className="rain-container" ref={rainContainerRef}>
  <div class="lightning">
        </div>


        {!loaded ? (<Loader />
        ) : (
        <img
            className="Rayquaza"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              zIndex: "0",
              opacity: "0.8",
            }}
            src={Rayquaza}
            alt="Rayquaza"
            onLoad={() => setLoaded(true)}
          />
        )}






          <div className={`relative w-full h-screen mx-auto`}>
            <div
              className={`absolute inset-0 top-[120px]  max-w-8xl  mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
              <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full' />
                <div className='w-1 sm:h-80 h-40 ' />
              </div>

              <div className="heroText">
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm <span className='text-[#ffff00]'>Liron Lin</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                  Welcome to my Pokémon-themed portfolio  <br className='sm:block hidden' />
                  I'm a Fullstack developer  <br className='sm:block hidden' />
                  Specializes in interfaces and web applications
                </p>
              </div>
            </div>


            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
              
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-yellow-200 flex justify-center items-start p-2'>
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className='w-3 h-3 rounded-full bg-yellow-200 mb-1'
                  />
                </div>
              
            </div>
          </div>

  </section>
    </>
  );
};

export default Hero;
