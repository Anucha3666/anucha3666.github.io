import Image from "next/image";
import { ExperienceHeader } from "../../common";

export const HVCMechatronicsRobotics = () => {
  return (
    <div className=' w-fullpy-2 gap-2 flex flex-col justify-center items-center'>
      <ExperienceHeader
        logoUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHKUN1ZiTYjAhWQKgq-y0YEaGvk8Ds1JvuA&s"
        }
        label='Higher Vocational Certificate in Mechatronics and Robotics'
        placeName='Uttaradit Technical College'
        location='Uttaradit, TH'
      />

      <div className='flex gap-4'>
        <div className='w-[20rem] h-min rounded-2xl shadow-2xl flex justify-center items-center overflow-hidden '>
          <Image
            src={
              "https://res.cloudinary.com/dqj0esw62/image/upload/v1748311483/IMG_7878_whcj65.jpg"
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

      <div className='w-[50rem] h-max flex justify-center items-center overflow-hidden '>
        <Image
          src={
            "https://res.cloudinary.com/dqj0esw62/image/upload/v1748311487/IMG_7880_cjliyt.jpg"
          }
          alt='anucha-ram'
          width={64}
          height={64}
          className='w-full h-min object-cover'
        />
      </div>
    </div>
  );
};
