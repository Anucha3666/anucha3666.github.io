import { Button, Image } from "antd";
import Link from "next/link";

export const SectionHome = () => {
  return (
    <section
      id='home'
      className='flex w-full gap-20 justify-center items-center px-4 md:px-6'
      style={{ height: "calc(100dvh - 3rem)" }}>
      <div className='flex w-max flex-col justify-center space-y-4'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
            {"Hi, I'm Anucha Rampeungnit"}
          </h1>
          <p className='max-w-[600px] text-muted-foreground md:text-xl'>
            Full-Stack Developer & UX Designer with 5+ years of experience
            building web applications
          </p>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
          <Button>Contact Me</Button>
          <Button>View Projects</Button>
        </div>
        <div className='flex items-center gap-4 text-sm'>
          <Link
            href='https://github.com'
            className='flex items-center gap-1 underline-offset-4 hover:underline'>
            GitHub
          </Link>
          <Link
            href='https://linkedin.com'
            className='flex items-center gap-1 underline-offset-4 hover:underline'>
            LinkedIn
          </Link>
          <Link
            href='https://twitter.com'
            className='flex items-center gap-1 underline-offset-4 hover:underline'>
            Twitter
          </Link>
        </div>
      </div>
      <div className='flex w-max items-center justify-center'>
        <div className='relative aspect-square overflow-hidden rounded-full border'>
          <Image
            src='/placeholder.svg?height=600&width=600'
            width={400}
            height={400}
            alt='Profile'
            className='object-cover w-[18rem] h-[18rem]'
          />
        </div>
      </div>
    </section>
  );
};
