import { PrimaryEducation } from "./bnm";
import { LowerSecondarySchool } from "./pc";
import { BSMechatronicsRobotics } from "./rmutto";
import { RobotIntlStudent } from "./setc";
import { HVCMechatronicsRobotics, VCElectronics } from "./utc";

export const DATA_EDUCATION_EXPERIENCE = [
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2021</p>
      </div>
    ),
    content: <BSMechatronicsRobotics />,
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2019</p>
      </div>
    ),
    content: (
      <div className=' flex flex-col gap-12'>
        <HVCMechatronicsRobotics />
        <RobotIntlStudent />
      </div>
    ),
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2016</p>
      </div>
    ),
    content: <VCElectronics />,
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2013</p>
      </div>
    ),
    content: <LowerSecondarySchool />,
  },
  {
    title: (
      <div className=' flex gap-4 items-center'>
        <p className=' text-5xl'>2007</p>
      </div>
    ),
    content: <PrimaryEducation />,
  },
];
