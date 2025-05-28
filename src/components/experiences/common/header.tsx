import Image from "next/image";
import { FC } from "react";

export type TExperienceHeaderProps = {
  logoUrl?: string;
  label?: string;
  placeName?: string;
  location?: string;
};

export const ExperienceHeader: FC<TExperienceHeaderProps> = ({
  logoUrl,
  label,
  placeName,
  location,
}) => {
  return (
    <div className=' w-full h-min flex justify-between'>
      <div className=' flex gap-2 items-center'>
        {logoUrl && (
          <div className='w-[3.4rem] h-[3.4rem] flex justify-center items-center overflow-hidden '>
            <Image
              src={logoUrl}
              alt='icon-snc'
              width={64}
              height={64}
              className='w-min h-full object-cover'
            />
          </div>
        )}
        <div>
          {label && (
            <p className='text-xl font-bold text-neutral-800'>{label}</p>
          )}
          {placeName && (
            <p className='text-lg font-normal text-neutral-800'>{placeName}</p>
          )}
        </div>
      </div>
      {location && (
        <p className='text-xl font-bold text-neutral-800'>{location}</p>
      )}
    </div>
  );
};
