"use client";

import { DATA_WORK_EXPERIENCE } from "@/constants";
import { useState } from "react";
import { DATA_EDUCATION_EXPERIENCE } from "../experiences";
import { Cover } from "../ui/cover";
import { Timeline } from "../ui/timeline";
import { Vortex } from "../ui/vortex";

export const SectionExperience = () => {
  const [experience, setExperience] = useState("Work");

  const isWorkExperience = experience === "Work";

  return (
    <section
      id='experience'
      className='flex flex-col w-full gap-10 overflow-hidden justify-center items-center px-4 md:px-6 pt-[5rem]'
      style={{ height: "calc(100dvh)" }}>
      <Vortex
        backgroundColor='#FFFFFF00'
        className='flex items-center flex-col justify-center w-full h-full pb-8'>
        <div className=' flex flex-col h-min gap-2 pt-8 justify-center items-center'>
          <div className='flex gap-2 items-center relative'>
            <svg
              width='150'
              height='150'
              viewBox='0 0 150 150'
              className='absolute z-10 -left-20 -top-8'>
              <defs>
                <path
                  id='curve'
                  d='M 20 130 A 120 120 0 0 1 280 130'
                  fill='transparent'
                />
              </defs>
              <text fontSize='16' fontWeight='bold' fill='black'>
                <textPath href='#curve' startOffset='30%' textAnchor='middle'>
                  Click me
                </textPath>
              </text>
            </svg>

            <div
              onClick={() =>
                setExperience(isWorkExperience ? "Education" : "Work")
              }>
              {isWorkExperience ? (
                <Cover
                  key={"work"}
                  className=' text-4xl font-bold cursor-pointer select-none'>
                  Work
                </Cover>
              ) : (
                <Cover
                  key={"education"}
                  className=' text-4xl font-bold cursor-pointer select-none'>
                  Education
                </Cover>
              )}
            </div>
            <p className=' text-4xl font-bold'>Experience</p>
          </div>
          <p className=' w-full text-center'>
            {isWorkExperience
              ? "My professional journey in the tech industry, showcasing my roles and responsibilities."
              : "My academic background, highlighting my studies, achievements, and areas of focus throughout my educational journey."}
          </p>
        </div>

        <Timeline
          data={
            isWorkExperience ? DATA_WORK_EXPERIENCE : DATA_EDUCATION_EXPERIENCE
          }
        />
      </Vortex>
    </section>
  );
};
