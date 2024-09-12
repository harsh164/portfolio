import React from 'react';
import { motion } from 'framer-motion';

function Certificate() {
  const certificates = [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      institution: "Udemy",
      date: "September 2024",
      link: "https://publuu.com/flip-book/651793/1453356"
    },
    {
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      institution: "Udemy",
      date: "May 2024",
      link: "https://publuu.com/flip-book/651793/1453352"
    },
    {
      title: "Advance Excel - Beginner to Ninja Level (includes charts)",
      institution: "Udemy",
      date: "April 2020",
      link: "https://publuu.com/flip-book/651793/1453355"
    }
  ];

  return (
    <div className='border-b border-neutral-800 pb-8'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl font-bold text-neutral-100'
      >
        Certificates
      </motion.h2>
      <div className='flex flex-wrap gap-8 justify-center'>
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500'
          >
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='block'
            >
              <h3 className='text-xl font-semibold text-neutral-100 mb-2'>{cert.title}</h3>
              <p className='text-md text-neutral-300 mb-1'>{cert.institution}</p>
              <p className='text-sm text-neutral-400'>{cert.date}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
