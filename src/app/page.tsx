"use client";

import {
  SectionAbout,
  SectionCertifications,
  SectionExperience,
  SectionHome,
  SectionProjects,
} from "@/components/home";

export default function Home() {
  return (
    <div className=' w-full h-min flex flex-col'>
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionExperience />
      <SectionCertifications />
    </div>
  );
}
