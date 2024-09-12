import React from 'react';
import harsh from "../images/harsh.jpg";
import { motion } from "framer-motion"

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 px-4 lg:px-16'>
      <div className='flex flex-wrap items-center'>
       
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1  initial={{ x:-100, opacity: 0}}
            animate={{x: 0, opacity:1}}
            transition={{duration:0.5, delay:0}}
            className=' pb-16 text-6xl font-thin lg:mt-16 lg:text-8xl'>
              Harsh Gupta
             </motion.h1>
            <motion.span 
            initial={{ x:-100, opacity: 0}}
            animate={{x: 0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 200 }}
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            <motion.p 
            initial={{ x:-100, opacity: 0}}
            animate={{x: 0, opacity:1}}
            transition={{duration:0.5, delay:1.2}}
            
            className='my-2 max-w-xl py-6'>
              As a dedicated full-stack developer, I specialize in creating dynamic, user-friendly web applications by seamlessly integrating both frontend and backend technologies. With a strong command of modern development tools like React, Node.js, MongoDB, and Tailwind CSS, I ensure that every project is not only visually engaging but also optimized for performance and scalability.
            </motion.p>
          </div>
        </div>

       
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-end mr-20 lg:mr-30'>
            <motion.img initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 200 }}
              src={harsh} 
              alt="Harsh Gupta" 
              className='rounded-lg opacity-80' 
              style={{ width: '415px', height: '500px' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
