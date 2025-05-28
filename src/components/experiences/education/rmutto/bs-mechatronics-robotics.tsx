import Image from "next/image";
import { ExperienceHeader } from "../../common";

export const BSMechatronicsRobotics = () => {
  return (
    <div className=' w-fullpy-2 gap-2 flex flex-col justify-center items-center'>
      <ExperienceHeader
        logoUrl={
          "https://so05.tci-thaijo.org/public/site/images/researchjournal2rmutto/rmutto-b7a148aa570f262aa363cff84439d069.jpg"
        }
        label='B.S. in Mechatronics and Robotics Engineering'
        placeName='Rajamangala University of Technology Tawan-ok'
        location='Chon Buri, TH'
      />

      <div className='flex gap-4'>
        <div className='w-[20rem] h-[20rem] rounded-2xl shadow-2xl flex justify-center items-center overflow-hidden '>
          <Image
            src={
              "https://res.cloudinary.com/dqj0esw62/image/upload/v1748311393/IMG_7879_j39x2j.jpg"
            }
            alt='anucha-ram'
            width={64}
            height={64}
            className='w-full h-min object-cover'
          />
        </div>

        <div className=' pl-2'>
          <div className='flex gap-2 items-center'>
            <div className=' w-[4px] h-[4px] rounded-full bg-black' />
            <p>
              GPA: 3.50 / 4.00 | Second-Class Honors (Upper Division) Senior
            </p>
          </div>
        </div>
      </div>
      <div className='w-[60rem] h-max flex justify-center items-center overflow-hidden '>
        <Image
          src={
            "https://res.cloudinary.com/dqj0esw62/image/upload/v1748318163/ipss_h6eiko.png"
          }
          alt='anucha-ram'
          width={64}
          height={64}
          className='w-full h-min object-cover'
        />
      </div>
      <p className=' font-bold'>
        Project: “A utility management platform for industrial sector”
      </p>
    </div>
  );
};
