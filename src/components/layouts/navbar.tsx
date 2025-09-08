"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const Navbar = () => {
  const navItems = [
    "About",
    "Projects",
    "Experience",
    "Certifications",
    "Contact",
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='sticky w-full h-[3rem] justify-center flex items-center top-0 z-50   shadow-xl bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='w-full items-center grid grid-cols-3'>
        <a
          key={`link-home`}
          href={`#home`}
          className='relative px-4 py-2 text-neutral-600 dark:text-neutral-300'
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth", block: "end" });
          }}>
          <span className='relative z-20 font-bold text-xl cursor-pointer'>
            Anucha Rampeungnit
          </span>
        </a>

        <div>
          <NavItems items={navItems} />
          <MobileNav>
            <MobileNavHeader>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}>
              {navItems?.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={`#${item?.toLocaleLowerCase()}`}
                  className='relative text-neutral-600 dark:text-neutral-300'
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    e.preventDefault();
                    document
                      .getElementById(item?.toLocaleLowerCase())
                      ?.scrollIntoView({ behavior: "smooth", block: "end" });
                  }}>
                  <span className='block'>{item}</span>
                </a>
              ))}
              <div className='flex w-full flex-col gap-4'>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant='primary'
                  className='w-full'>
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant='primary'
                  className='w-full'>
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </div>

        <div className=' flex gap-2 justify-end cursor-pointer'>
          <PhotoProvider>
            <PhotoView
              src={
                "https://res.cloudinary.com/dqj0esw62/image/upload/v1757298454/Resume_rjjbme.png"
              }>
              <div className='relative border-[1px] shadow-2xl inline-flex items-center justify-start w-[6rem] py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'>
                <span className='w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
                <span className='relative text-center font-semibold text-sm w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
                  Resume
                </span>
              </div>
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView
              src={
                "https://res.cloudinary.com/dqj0esw62/image/upload/v1757298440/CV_k474fe.png"
              }>
              <div className='relative border-[1px] shadow-2xl inline-flex items-center justify-start w-[6rem] py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'>
                <span className='w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
                <span className='relative text-center font-semibold text-sm w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
                  C.V.
                </span>
              </div>
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>
    </header>
  );
};
