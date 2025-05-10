import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";
import Link from "next/link";

export const SectionHome = () => {
  const items = [
    {
      title: "Sichuan, China 2019",
      image: "/images/me/sichuan_2019.png",
      className: "absolute top-50 left-[20%] rotate-[-7deg]",
    },
    {
      title: "Chanthaburi, Thailand 2024",
      image: "/images/me/chanthaburi_2024.png",
      className: "absolute top-30 left-[5%] rotate-[-5deg]",
    },
    {
      title: "Rayong, Thailand 2024",
      image: "/images/me/rayong_2024.png",
      className: "absolute top-15 left-[25%] rotate-[8deg]",
    },
    {
      title: "Surat Thani, Thailand 2024",
      image: "/images/me/surat-thani_2024.png",
      className: "absolute top-50 left-[40%] rotate-[10deg]",
    },
    {
      title: "Kunming, China 2024",
      image: "/images/me/kunming_2024.png",
      className: "absolute top-60 left-[10%] rotate-[2deg]",
    },
    {
      title: "Rayong, Thailand 2025",
      image: "/images/me/rayong_2025.png",
      className: "absolute top-70 left-[30%] rotate-[-7deg]",
    },
    {
      title: "Mahingsa",
      image: "/images/me/mahingsa.jpeg",
      className: "absolute top-42 left-[20%] rotate-[4deg]",
    },
  ];
  return (
    <section
      id='home'
      className='flex w-full gap-20 justify-center items-center px-4 md:px-6'
      style={{ height: "calc(100dvh - 3rem)" }}>
      <div className='flex w-full flex-col justify-center space-y-4'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-nowrap'>
            {"Hi, Guys"}
          </h1>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-nowrap'>
            {"I'm Anucha Rampeungnit"}
          </h1>
          <p className='max-w-[600px] text-muted-foreground md:text-xl'>
            Full-Stack Developer & UX Designer with 3+ years of experience
            building web applications
          </p>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
          <button className='px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'>
            Contact Me
          </button>
          <button className='px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'>
            View Projects
          </button>
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
      <div className='flex w-full h-full items-center justify-center'>
        <DraggableCardContainer className='relative flex h-full w-full items-center justify-center overflow-clip '>
          <p className='absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800'>
            The more knowledge we gain, the more we become aware of our
            ignorance.
          </p>
          {items?.map((item, i) => (
            <DraggableCardBody
              key={`${item?.title}-${i + 1}`}
              className={item.className}>
              <Image
                src={item?.image}
                alt={item?.title}
                width={256}
                height={256}
                className='pointer-events-none relative z-10 h-64 w-64 object-cover rounded'
              />

              <h3 className='mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300'>
                {item?.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
};
