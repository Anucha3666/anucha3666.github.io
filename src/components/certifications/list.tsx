import { FC } from "react";

export type TListDescriptionProps = {
  list?: string[];
};

export const ListDescription: FC<TListDescriptionProps> = ({ list }) => {
  return (
    <div>
      {list?.map((info, i) => (
        <div key={i} className='flex gap-2 pl-4 '>
          <div className='pt-2'>
            <div className=' w-[0.4rem] h-[0.4rem] bg-white rounded-full  ' />
          </div>
          <p>{info}</p>
        </div>
      ))}
    </div>
  );
};
