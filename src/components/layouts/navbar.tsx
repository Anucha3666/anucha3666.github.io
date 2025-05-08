import Link from "next/link";

export const Navbar = () => {
  return (
    <header className='sticky w-full top-0 z-50 border-b bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='w-full flex py-4 items-center justify-between'>
        <Link href='/' className='font-bold text-xl'>
          Anucha Rampeungnit
        </Link>
        <nav className='hidden md:flex gap-6'>
          <Link
            href='#about'
            className='text-sm font-medium hover:underline underline-offset-4'>
            About
          </Link>
          <Link
            href='#projects'
            className='text-sm font-medium hover:underline underline-offset-4'>
            Projects
          </Link>
          <Link
            href='#experience'
            className='text-sm font-medium hover:underline underline-offset-4'>
            Experience
          </Link>
          <Link
            href='#certifications'
            className='text-sm font-medium hover:underline underline-offset-4'>
            Certifications
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium hover:underline underline-offset-4'>
            Contact
          </Link>
        </nav>
        <button className=' w-max md:flex'>Download Resume</button>
      </div>
    </header>
  );
};
