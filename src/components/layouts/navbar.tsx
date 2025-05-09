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

        <div className=' flex gap-2 justify-end'>
          <button className='relative inline-flex h-min overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-medium backdrop-blur-3xl'>
              Resume
            </span>
          </button>
          <button className='relative inline-flex h-min overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-medium backdrop-blur-3xl'>
              C.V.
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
