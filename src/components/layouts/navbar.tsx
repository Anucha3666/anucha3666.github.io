"use client";

import { Button } from "antd";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className='sticky w-full h-[3rem] justify-center flex items-center top-0 z-50   shadow-xl bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='w-full items-center grid  grid-cols-3'>
        <p
          className='font-bold text-xl cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth", block: "end" });
          }}>
          Anucha Rampeungnit
        </p>
        <nav className='hidden md:flex gap-6 justify-center items-center'>
          <Link
            href='#about'
            className='text-sm font-medium hover:underline underline-offset-4'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}>
            About
          </Link>
          <Link
            href='#projects'
            className='text-sm font-medium hover:underline underline-offset-4'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}>
            Projects
          </Link>
          <Link
            href='#experience'
            className='text-sm font-medium hover:underline underline-offset-4'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}>
            Experience
          </Link>
          <Link
            href='#certifications'
            className='text-sm font-medium hover:underline underline-offset-4'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("certifications")
                ?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}>
            Certifications
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium hover:underline underline-offset-4'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}>
            Contact
          </Link>
        </nav>
        <div className=' flex gap-2 justify-end'>
          <Button>Resume</Button>
          <Button>Cv</Button>
        </div>
      </div>
    </header>
  );
};
