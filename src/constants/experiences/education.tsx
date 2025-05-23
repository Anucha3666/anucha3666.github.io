import Image from "next/image";

export const DATA_EDUCATION_EXPERIENCE = [
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
            <div className='w-[3.4rem] h-[3.4rem] flex justify-center items-center overflow-hidden '>
              <Image
                src='https://so05.tci-thaijo.org/public/site/images/researchjournal2rmutto/rmutto-b7a148aa570f262aa363cff84439d069.jpg'
                alt='icon-snc'
                width={64}
                height={64}
                className='w-min h-full object-cover'
              />
            </div>
            <div>
              <p className='text-xl font-bold text-neutral-800'>
                B.S. in Mechatronics and Robotics Engineering
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                Rajamangala University of Technology Tawan-ok
              </p>
            </div>
          </div>
          <p className='text-xl font-bold text-neutral-800'>Chon Buri, TH</p>
        </div>
        <div className=' pl-2'>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              GPA: 3.50 / 4.00 | Second-Class Honors (Upper Division) Senior
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              Project: “A utility management platform for industrial sector”
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2019</p>
      </div>
    ),
    content: (
      <div className=''>
        <div className=' py-2'>
          <div className=' flex justify-between'>
            <div className=' flex gap-2 items-center'>
              <div className='w-[3.4rem] h-[3.4rem] flex justify-center items-center overflow-hidden '>
                <Image
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHKUN1ZiTYjAhWQKgq-y0YEaGvk8Ds1JvuA&s'
                  alt='icon-snc'
                  width={64}
                  height={64}
                  className='w-min h-full object-cover'
                />
              </div>
              <div>
                <p className='text-xl font-bold text-neutral-800'>
                  Higher Vocational Certificate in Mechatronics and Robotics
                </p>
                <p className='text-lg font-normal text-neutral-800'>
                  Uttaradit Technical College
                </p>
              </div>
            </div>

            <p className='text-xl font-bold text-neutral-800'>Uttaradit, TH </p>
          </div>
          <div className=' pl-2'>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>
                GPA: 3.69 / 4.00 | Second-Class Honors (Upper Division) Senior
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>
                Developed front-end components and interfaces for internal tools
              </p>
            </div>
          </div>
        </div>
        <div className=' py-2'>
          <div className=' flex justify-between'>
            <div className=' flex gap-2 items-center'>
              <div className='w-[3.4rem] h-[3.4rem] flex justify-center items-center overflow-hidden '>
                <Image
                  src='https://tethys-engineering.pnnl.gov/sites/default/files/taxonomy-images/scetc-logo.jpg'
                  alt='icon-snc'
                  width={64}
                  height={64}
                  className='w-min h-full object-cover'
                />
              </div>
              <div>
                <p className='text-xl font-bold text-neutral-800'>
                  Robot International Student Program
                </p>
                <p className='text-lg font-normal text-neutral-800'>
                  Sichuan Engineering Technical College
                </p>
              </div>
            </div>

            <p className='text-xl font-bold text-neutral-800'>Sichuan, CN</p>
          </div>
          <div className=' pl-2'>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[4px] rounded-full bg-black' />
              <p>Graduated with High Distinction</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2016</p>
      </div>
    ),
    content: (
      <div className=' py-2'>
        <div className=' flex justify-between'>
          <div className=' flex gap-2 items-center'>
            <div className='w-[3.4rem] h-[3.4rem] flex justify-center items-center overflow-hidden '>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHKUN1ZiTYjAhWQKgq-y0YEaGvk8Ds1JvuA&s'
                alt='icon-snc'
                width={64}
                height={64}
                className='w-min h-full object-cover'
              />
            </div>
            <div>
              <p className='text-xl font-bold text-neutral-800'>
                Vocational Certificate in Electronics
              </p>
              <p className='text-lg font-normal text-neutral-800'>
                Uttaradit Technical College
              </p>
            </div>
          </div>
          <p className='text-xl font-bold text-neutral-800'>Uttaradit, TH </p>
        </div>
        <div className=' pl-2'>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              GPA: 3.59 / 4.00 | Second-Class Honors (Upper Division) Senior
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>Project: “Coin-operated vending machine”</p>
          </div>
        </div>
      </div>
    ),
  },
];
