import React from 'react';
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center pb-20'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
       className='my-10 text-2xl text-center font-bold'>Contact Me</motion.h1>
      <div className='text-base mt-2'>
     
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='text-center tracking-tighter'>
          <span className='font-semibold'>Phone: </span>
          <p className='text-blue-500'>+91 7392860135</p>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='text-center tracking-tighter'>
          <span className='font-semibold'>Email: </span>
          <p className='text-blue-500'>harshgupt.gupta@gmail.com</p>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
         className='text-center tracking-tighter'>
          <span className='font-semibold'>Adress: </span>
          <p className='text-blue-500'>Bengaluru Karnataka</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
