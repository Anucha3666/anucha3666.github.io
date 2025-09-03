"use client";

import {
  DATA_CERTIFICATIONS,
  StickyScrollCertification,
} from "../certifications";
import { Tabs } from "../ui/tabs";

export const SectionCertifications = () => {
  const tabs = [
    {
      title: "Tech Certifications",
      value: "tech",
    },
    {
      title: "Languages",
      value: "language",
    },
    {
      title: "Training & Courses",
      value: "training_course",
    },
    {
      title: "Competitions & Awards",
      value: "competition_award",
    },
    {
      title: "Licenses",
      value: "licenses",
    },
    {
      title: "Other",
      value: "other",
    },
  ];

  return (
    <section
      id='certifications'
      className='flex flex-col w-full gap-2 overflow-hidden justify-center items-center px-4 md:px-6 pb-12 pt-[5rem]'
      style={{ height: "calc(100dvh)" }}>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <p className=' text-4xl font-bold'>Certifications</p>
        <p className=' w-full text-center'>
          {
            "My professional journey in the tech industry, showcasing my roles and responsibilities."
          }
        </p>
      </div>
      {/* <div className='h-full [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start'> */}
      <div className='h-full relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start'>
        <Tabs
          tabs={tabs?.map((item) => {
            const data = DATA_CERTIFICATIONS?.filter(({ tags }) =>
              tags?.includes(item?.value)
            )?.sort((a, b) => {
              const [dayA, monthA, yearA] = String(a?.date_issue)
                .split("/")
                .map(Number);
              const [dayB, monthB, yearB] = String(b?.date_issue)
                .split("/")
                .map(Number);

              const dateA = new Date(yearA, monthA - 1, dayA);
              const dateB = new Date(yearB, monthB - 1, dayB);

              return dateB.getTime() - dateA.getTime(); // ล่าสุดอยู่ก่อน
            });
            return {
              ...item,
              length: data?.length,
              content: (
                <div className=' w-full h-full justify-center items-center overflow-auto shadow-md'>
                  <StickyScrollCertification content={data} />
                </div>
              ),
            };
          })}
        />
      </div>
    </section>
  );
};
