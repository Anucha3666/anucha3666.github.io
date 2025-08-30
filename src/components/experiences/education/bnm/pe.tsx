import { ExperienceHeader } from "../../common";

export const PrimaryEducation = () => {
  return (
    <div className=' w-fullpy-2 gap-2 flex flex-col justify-center items-center'>
      <ExperienceHeader
        logoUrl={"/images/experience/education/bnm.jpg"}
        label='Primary Education (Prathom 1-6)'
        placeName='Bannaimuang School'
        location='Uttaradit, TH'
      />

      <div className=' pl-2'></div>
    </div>
  );
};
