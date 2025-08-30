import Image from "next/image";

export const DATA_WORK_EXPERIENCE = [
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2025</p>
      </div>
    ),
    content: (
      <div className=' py-2'>
        <div className=' flex justify-between'>
          <div className=' flex gap-2 items-center'>
            <div className='w-[3.4rem] h-[3.4rem] p-1 rounded-full border-[1px] shadow-2xl flex justify-center items-center overflow-hidden '>
              <Image
                src='/images/experience/work/seren.png'
                alt='icon-snc'
                width={64}
                height={64}
                className='w-full h-min object-cover'
              />
            </div>

            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Full Stack Developer
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                SNC Serenity co., ltd. (SNC)
              </p>
            </div>
          </div>
          <p className='text-xl font-bold text-neutral-800'>Rayong, TH</p>
        </div>
        <div className=' pl-2'>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              Responsible for both front-end and back-end development of web
              applications
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              Developed and maintained APIs, databases, and server-side logic to
              support seamless user experiences
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              Collaborated with cross-functional teams to deliver scalable,
              secure, and high-performance web solutions
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2023</p>
      </div>
    ),
    content: (
      <div className=' py-2'>
        <div className=' flex justify-between'>
          <div className=' flex gap-2 items-center'>
            <div className='w-[3.4rem] h-[3.4rem] p-1 rounded-full border-[1px] shadow-2xl flex justify-center items-center overflow-hidden '>
              <Image
                src='/images/experience/work/99is.png'
                alt='icon-snc'
                width={64}
                height={64}
                className='w-full h-min object-cover'
              />
            </div>

            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Front-End Developer & UX/UI Designer
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                99 Industrial Solutions co., ltd. (SNC)
              </p>
            </div>
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
        <p className=' text-5xl'>2021</p>
      </div>
    ),
    content: (
      <div className=' py-2'>
        <div className=' flex justify-between'>
          <div className=' flex gap-2 items-center'>
            <div className='w-[3.4rem] h-[3.4rem] p-1 rounded-full border-[1px] shadow-2xl flex justify-center items-center overflow-hidden '>
              <Image
                src='/images/experience/work/scan.png'
                alt='icon-snc'
                width={64}
                height={64}
                className='w-full h-min object-cover'
              />
            </div>
            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Maker, 3D Designer & Front-End Developer
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                SNC Creativity Anthology co., ltd. (SNC)
              </p>
            </div>
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
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2018</p>
      </div>
    ),
    content: (
      <div className=' py-2'>
        <div className=' flex justify-between'>
          <div className=' flex gap-2 items-center'>
            <div className='w-[3.4rem] h-[3.4rem] p-1 rounded-full border-[1px] shadow-2xl flex justify-center items-center overflow-hidden '>
              <Image
                src='/images/experience/work/cat.png'
                alt='icon-snc'
                width={64}
                height={64}
                className='w-full h-min object-cover'
              />
            </div>
            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Maintenance technician
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                The Communications Authority of Thailand (CAT)
              </p>
            </div>
          </div>
          <p className='text-xl font-bold text-neutral-800'>Uttaradit, TH</p>
        </div>
        <div className=' pl-2'>
          {[
            "Provided customer service and resolved technical issues",
            "Conducted training sessions for students on telecommunication systems",
            "Installed and repaired fiber optic cables",
            "Troubleshot and maintained telecommunication network systems",
            "Performed routine maintenance on communication equipment and network infrastructure",
            "Installed and upgraded various signal cable systems",
            "Documented maintenance activities and prepared technical reports",
          ]?.map((info, i) => (
            <div key={i} className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>{info}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];
