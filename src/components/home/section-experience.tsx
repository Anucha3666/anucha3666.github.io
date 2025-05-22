"use client";

import { Timeline } from "../ui/timeline";

export const SectionExperience = () => {
  const data = [
    {
      title: (
        <div className=' flex gap-4 items-center'>
          <div className='w-[4rem] h-[4rem] rounded-full border-[1px] shadow-2xl flex justify-center items-center overflow-hidden '>
            <img
              src='/images/experience/work/99is.png'
              alt='icon-snc'
              className='w-full h-min object-cover'
            />
          </div>
          <p className=' text-5xl'>2023</p>
        </div>
      ),
      content: (
        <div className=' py-2'>
          <div className=' flex justify-between'>
            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Front-End Developer & UX/UI Designer
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                99 Industrial Solutions co., ltd. (SNC)
              </p>
            </div>
            <p className='text-xl font-bold text-neutral-800'>Rayong, TH</p>
          </div>
          <div className=' pl-2'>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>
                Responsible for website development and user interface design
                (UX/UI)
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>
                Collaborated with teams to enhance website usability and visual
                appeal
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className=' flex gap-4 items-center'>
          <div className='w-[4rem] h-[4rem] p-1 rounded-full border-[1px] shadow-2xl flex justify-center items-center overflow-hidden '>
            <img
              src='/images/experience/work/scan.png'
              alt='icon-snc'
              className='w-full h-min object-cover'
            />
          </div>
          <p className=' text-5xl'>2021</p>
        </div>
      ),
      content: (
        <div className=' py-2'>
          <div className=' flex justify-between'>
            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Maker, 3D Designer & Front-End Developer
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                SNC Creativity Anthology co., ltd. (SNC)
              </p>
            </div>
            <p className='text-xl font-bold text-neutral-800'>Rayong, TH</p>
          </div>
          <div className=' pl-2'>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>Designed 3D models and jigs for copper pipe manufacturing</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>
                Developed front-end components and interfaces for internal tools
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>
                Combined design thinking with practical engineering for
                prototyping
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id='experience'
      className='flex flex-col w-full gap-10 overflow-hidden justify-center items-center px-4 md:px-6 pt-[3.2rem]'
      style={{ height: "calc(100dvh)" }}>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <p className=' text-4xl font-bold'>Work Experience</p>
        <p className=' w-full text-center'>
          {
            "My professional journey in the tech industry, showcasing my roles and responsibilities."
          }
        </p>
      </div>
      <div className='w-full h-full justify-center items-center overflow-auto'>
        <Timeline data={data} />
      </div>
    </section>
  );
};
