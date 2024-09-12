import React from 'react'
import harsh from "../images/harsh2.jpg"
import {motion} from "framer-motion"
function About() {
  return (
    <div className='border-b border-neutral-900 pb-4' >
        <h1 className='my-20 text-center bg-gradient-to-r from-green-900 via-slate-500 to-green-400 bg-clip-text  tracking-tight text-transparent text-4xl'>About 
            <span className='text-neutral-500'>Me</span></h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                    className="rounded-2xl" src={harsh}   style={{ width: '300px', height: '350px' }} />
                    
                    
                </div>
                    
                    
                </div>
                <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <motion.p
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:0.5}}
                     className='my-2 max-w-xl py-6'>I’m Harsh Gupta, a passionate full-stack developer with expertise in Python, advanced Excel, and web development. I specialize in building dynamic, scalable applications using modern frameworks like React, Node.js, and MongoDB. With a strong focus on user experience and clean, efficient code, I strive to create impactful solutions. My experience with advanced Excel also helps me integrate data-driven decision-making into my projects. I’m constantly learning and love tackling new challenges in the tech world.</motion.p>

                </div>

                </div>
                    

            </div>
      
    </div>
  )
}

export default About
