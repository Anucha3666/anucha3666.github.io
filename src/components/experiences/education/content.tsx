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
      <>
        <HVCMechatronicsRobotics />
        <RobotIntlStudent />
      </>
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
];
