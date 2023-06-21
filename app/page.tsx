import Image from 'next/image';
import { skills, projects } from '../common/data';

function Navbar() {
  return (
    <div className='max-w-[1200px] w-full bg-cyan-950 h-16 fixed flex items-center justify-between px-5 border-l-[3px] border-r-[3px] border-amber-400 drop-shadow-[0_10px_35px_rgba(255,255,255,0.50)]'>
      <div className='w-12 h-full'>
        <a href='#' className='w-12 mt-2 h-12 absolute'></a>
        <div className='flex h-12 mt-2'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-91e68.appspot.com/o/portfolio_pic.png?alt=media&token=9036f7b5-a995-469a-aaa2-f07d4a8fda78'
            width={500}
            height={500}
            alt='Profile Pic'
          />
        </div>
      </div>
      <div className='flex gap-3'>
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
      </div>
    </div>
  );
}

function Personal() {
  return (
    <>
      <div className='text-2xl lg:text-5xl text-center flex'>
        <p className='text-amber-400'>Welcome</p>, I&apos;m Adolfo Murillo
      </div>
      <div className='w-3/4 lg:w-1/2 text-center mt-6'>
        <div>
          A Frontend Web Developer in the making with an extensive background in
          design and customer success who loves to engage in new challenges.
          <br />
          <br />
          I&apos;m building my portfolio and focusing on Job opportunities where I
          can contribute, learn and grow.
        </div>
      </div>
    </>
  );
}

function Skills({ skills: [] }) {
  return (
    <>
      <div className='text-2xl text-amber-400 mb-12'>Skills</div>
      <div className='flex flex-wrap justify-center text-center gap-12 w-3/4 bg-white text-black rounded-3xl py-5 px-3'>
        {skills.map(({ name, imageUrl, imageAlt }, index) => (
          <div
            key={index}
            className='w-[25px] md:w-[50px] lg:w-[50px] flex flex-col items-center'
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
      </div>
    </>
  );
}

function Projects({ projects: [] }) {
  return (
    <>
      <div className='text-2xl text-amber-400 mb-12'>Projects</div>
      {projects.map(
        (
          { name, description, imageUrl, imageAlt, websiteUrl, githubUrl },
          index
        ) => (
          <div
            key={index}
            className='flex-col flex items-center text-center w-3/4'
          >
            <div className='bg-zinc-500 items-center w-full flex flex-col py-6 px-6 rounded-3xl mb-6'>
              <div className='text-xl mb-4 border-b-2 border-amber-400 px-2'>
                {name}
              </div>
              <div className='mb-4'>{description}</div>
              <div className='flex-col lg:flex lg:flex-row gap-16'>
                <Image
                  className='rounded-md'
                  src={imageUrl}
                  width={500}
                  height={500}
                  alt={imageAlt}
                />
                <div className='flex flex-col gap-2 items-center mt-4 lg:m-auto'>
                  <a
                    className='px-1 w-32 leading-3 py-2 text-sm bg-neutral-800 rounded-md border border-amber-400 hover:scale-105'
                    href={websiteUrl}
                    target='_blank'
                  >
                    Visit Website
                  </a>
                  <a
                    className='px-1 w-32 leading-3 py-2 text-sm bg-neutral-800 rounded-md border border-amber-400 hover:scale-105'
                    href={githubUrl}
                    target='_blank'
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className='flex-col flex w-full items-center'>
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
