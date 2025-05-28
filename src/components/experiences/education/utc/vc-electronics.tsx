import { ExperienceHeader } from "../../common";

export const VCElectronics = () => {
  return (
    <div className=' w-fullpy-2 gap-2 flex flex-col justify-center items-center'>
      <ExperienceHeader
        logoUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHKUN1ZiTYjAhWQKgq-y0YEaGvk8Ds1JvuA&s"
        }
        label='Vocational Certificate in Electronics'
        placeName='Uttaradit Technical College'
        location='Uttaradit, TH'
      />

      <div className=' pl-2'>
        <div className='flex gap-2 items-center'>
          <div className=' w-[4px] h-[4px] rounded-full bg-black' />
          <p>GPA: 3.59 / 4.00 | Second-Class Honors (Upper Division) Senior</p>
        </div>
        <div className='flex gap-2 items-center'>
          <div className=' w-[4px] h-[4px] rounded-full bg-black' />
          <p>Project: “Coin-operated vending machine”</p>
        </div>
      </div>
    </div>
  );
};
