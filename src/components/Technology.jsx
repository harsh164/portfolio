import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import {animate, motion} from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{y:[20,-20],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        },
    },
});

function Technology() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}} 
      className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>

        Technologies
      </motion.h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className='text-7xl text-white' />
        </motion.div>
        <motion.div 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>
        <motion.div
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiRedis className='text-7xl text-red-600' />
        </motion.div>
        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-400' />
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoPostgresql className='text-7xl text-blue-500' />
        </motion.div>
      </div>
    </div>
  );
}

export default Technology;
