'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { skills, projects } from '../common/data';

function Navbar() {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [-250, 0] }}
      transition={{ duration: 1 }}
      className='max-w-[1200px] w-full bg-cyan-950 h-16 fixed flex items-center justify-between px-5 border-l-[3px] border-r-[3px] border-amber-400 drop-shadow-[0_10px_35px_rgba(255,255,255,0.50)] select-none z-50'
    >
      <motion.div
        animate={{ y: [-60, 0], scale: [0, 1] }}
        transition={{ duration: 1, delay: 1 }}
        className='w-12 h-full hover:opacity-80 hover:duration-700'
      >
        <a href='#' className='w-12 mt-2 h-12 absolute'></a>
        <div className='flex h-12 mt-2'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-91e68.appspot.com/o/portfolio_pic.png?alt=media&token=9036f7b5-a995-469a-aaa2-f07d4a8fda78'
            width={500}
            height={500}
            alt='Profile Pic'
          />
        </div>
      </motion.div>
      <motion.div
        animate={{ x: [700, 0], opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 1, delay: 1.5 }}
        className='flex gap-3'
      >
        <a href='#projects' className=' hover:text-amber-400'>
          Projects
        </a>
        <a href='#skills' className=' hover:text-amber-400'>
          Skills
        </a>
        <a
          href='mailto:adolfomv@gmail.com'
          className=' animate-pulse hover:text-amber-400 hover:animate-none'
        >
          Let&apos;s Talk
        </a>
      </motion.div>
    </motion.div>
  );
}

function Personal() {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className='text-2xl lg:text-5xl text-center flex-col my-6 select-none'>
          <div className='text-amber-400 mb-2 lg:mb-4'>Welcome</div>
          <div>I&apos;m Adolfo Murillo</div>
        </div>
        <div className='mx-auto w-3/4 px-2 lg:px-12 mt-6 select-none'>
          <div>
            A Frontend Web Developer in the making with an extensive background
            in design and customer success who loves to engage in new
            challenges.
            <br />
            <br />
            I&apos;m building my portfolio and focusing on Job opportunities
            where I can contribute, learn and grow.
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Skills({ skills: [] }) {
  return (
    <>
      <motion.div
        animate={{ rotate: [360, 0], opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 1, delay: 1.5 }}
        className='text-2xl text-amber-400 mb-12 select-none'
      >
        Skills
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 1 }}
        className='flex flex-wrap justify-center text-center gap-12 w-3/4 bg-white text-black rounded-3xl py-5 px-6 lg:px-3 select-none'
      >
        {skills.map(({ name, imageUrl, imageAlt }, index) => (
          <div
            key={index}
            className='w-[25px] md:w-[50px] lg:w-[50px] lg:mx-3 flex flex-col items-center'
          >
            <Image
              className='rounded-md'
              src={imageUrl}
              width={500}
              height={500}
              alt={imageAlt}
            />
            <div className='text-xs mt-2'>{name}</div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

function Projects({ projects: [] }) {
  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1], rotate: [360, 0], scale: [0, 1] }}
        transition={{ duration: 1, delay: 1.5 }}
        className='text-2xl text-amber-400 mb-12 select-none'
      >
        Projects
      </motion.div>
      {projects.map(
        (
          { name, description, imageUrl, imageAlt, websiteUrl, githubUrl },
          index
        ) => (
          <motion.div
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 1 }}
            key={index}
            className='flex-col flex items-center w-3/4 select-none'
          >
            <div className='bg-zinc-500 items-center w-full flex flex-col py-6 px-6 rounded-3xl mb-6'>
              {name && (
                <div className='text-center text-xl mb-4 border-b-2 border-amber-400 px-2'>
                  {name}
                </div>
              )}
              {description && (
                <div className='mb-6 px-2 lg:px-12'>{description}</div>
              )}
              <div className='flex-col lg:flex lg:flex-row gap-16'>
                {imageUrl && (
                  <Image
                    className='rounded-md'
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={imageAlt}
                  />
                )}
                <div className='flex flex-col gap-2 items-center mt-4 lg:m-auto'>
                  {websiteUrl && (
                    <a
                      className='px-1 w-32 leading-3 py-2 text-sm bg-neutral-800 rounded-md border border-amber-400 hover:scale-105 text-center'
                      href={websiteUrl}
                      target='_blank'
                    >
                      Visit Website
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      className='px-1 w-32 leading-3 py-2 text-sm bg-neutral-800 rounded-md border border-amber-400 hover:scale-105 text-center'
                      href={githubUrl}
                      target='_blank'
                    >
                      View on Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className='flex-col flex w-full items-center animate-fade_1 '>
        <div className='mt-28' />
        <Navbar />
        <div className='flex flex-col w-full items-center'>
          <Personal />
        </div>
        <div id='skills' className='py-12' />
        <Skills skills={[]} />
        <div id='projects' className='py-12' />
        <Projects projects={[]} />
        <div />
        <div className='mt-4 mb-6'>
          <a
            href='mailto:adolfomv@gmail.com'
            className='text-cyan-500 hover:text-cyan-600'
          >
            adolfomv@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
