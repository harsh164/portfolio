import React from 'react';
import Project1 from "../images/shop.png";
import Project2 from "../images/blog.png";
import Project3 from "../images/drum.png";
import {motion} from "framer-motion"

function Project() {
  const Projects = [
    {
      title: "Luxe Galleria",
      image: Project1,
      description: "Luxe Galleria is a fully functional e-commerce website designed to offer a premium shopping experience. Key features include product listing pages that showcase high-end fashion and accessories, a shopping cart for managing items and quantities, and user authentication to ensure secure login, registration, and personalized accounts.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Blog Web",
      image: Project2,
      description: "I developed a fully functional blog website using Node.js and Express.js. The platform allows users to create, read, update, and delete blog posts seamlessly. It features a dynamic and responsive design, efficient routing, and EJS templating for rendering views.",
      technologies: ["HTML", "CSS", "EJS", "Node.js", "Bootstrap","PostgreSQL"],
    },
    {
      title: "A Drum Kit",
      image: Project3,
      description: "I created an interactive drum kit application using Python with the Tkinter library for the graphical interface and Pygame for sound playback. Users can play various drum sounds by clicking on buttons or pressing corresponding keys on the keyboard.",
      technologies: ["Python", "Tkinter"],
    }
  ];

  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h2
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
      className="my-20 text-center text-4xl  ">Projects</motion.h2>
      {Projects.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <motion.img
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:0.5}}
              src={project.image}
              width={250}
              height={250}
              alt={project.title}
              className='mb-6 rounded'
            />
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='mb-4 text-neutral-400'>{project.description}</motion.p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
