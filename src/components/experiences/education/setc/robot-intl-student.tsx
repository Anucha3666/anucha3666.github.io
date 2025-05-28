import Image from "next/image";
import { ExperienceHeader } from "../../common";

export const RobotIntlStudent = () => {
  return (
    <div className=' w-fullpy-2 gap-2 flex flex-col justify-center items-center'>
      <ExperienceHeader
        logoUrl={
          "https://tethys-engineering.pnnl.gov/sites/default/files/taxonomy-images/scetc-logo.jpg"
        }
        label='Robot International Student Program'
        placeName='Sichuan Engineering Technical College'
        location='Sichuan, CN'
      />
      <div className='flex gap-4'>
        <div className='w-[20rem] h-min rounded-2xl shadow-2xl flex justify-center items-center overflow-hidden '>
          <Image
            src={
              "https://res.cloudinary.com/dqj0esw62/image/upload/v1748311469/IMG_7881_eu6geb.jpg"
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
            <p>Graduated with High Distinction</p>
          </div>
        </div>
      </div>

      <div className='w-[50rem] h-max flex justify-center items-center overflow-hidden '>
        <Image
          src={
            "https://res.cloudinary.com/dqj0esw62/image/upload/v1748311465/IMG_7882_kjsod9.jpg"
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
