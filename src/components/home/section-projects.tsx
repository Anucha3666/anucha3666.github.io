"use client";

import Image from "next/image";
import { Card, Carousel } from "../ui/apple-cards-carousel";

export const SectionProjects = () => {
  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
              <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
                <span className='font-bold text-neutral-700 dark:text-neutral-200'>
                  The first rule of Apple club is that you boast about Apple
                  club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take
                amazing class notes. Want to convert those notes to text? No
                problem. Langotiya jeetu ka mara hua yaar is ready to capture
                every thought.
              </p>
              <Image
                src='https://assets.aceternity.com/macbook.png'
                alt='Macbook mockup from Aceternity UI'
                width={64}
                height={64}
                className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
              />
            </div>
          );
        })}
      </>
    );
  };

  const data = [
    {
      category: "Management System",
      title: "PTMS | Part Tag Management System",
      src: "/images/projects/ptms/login.png",
      content: <DummyContent />,
    },

    {
      category: "Management System",
      title: "SDE | Speed Drone Express",
      src: "/images/projects/sde/login.png",
      content: <DummyContent />,
    },
    {
      category: "Game",
      title: "CGG | Color Guessing Game",
      src: "/images/projects/ccg/home.png",
      content: <DummyContent />,
    },
    {
      category: "Developer Tools",
      title: "KC | Key Codes",
      src: "/images/projects/kc/home.png",
      content: <DummyContent />,
    },
    {
      category: "Game",
      title: "TTT | Tic Tac Toe",
      src: "/images/projects/ttt/home.png",
      content: <DummyContent />,
    },
    {
      category: "Management System",
      title: "WPD | Pokedex",
      src: "/images/projects/pokedex/home.png",
      content: <DummyContent />,
    },
    {
      category: "Management System",
      title: "OFO | Online Food Ordering System",
      src: "/images/projects/ofo/home.png",
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section
      id='projects'
      className='flex flex-col w-full gap-10 justify-center items-center px-4 md:px-6 pt-[5rem]'
      style={{ height: "calc(100dvh)" }}>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <p className=' text-4xl font-bold'>My Projects</p>
        <p className=' w-full text-center'>
          {
            "Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity."
          }
        </p>
      </div>
      <div className=' w-full overflow-hidden flex gap-10 h-min justify-center items-center'>
        <Carousel items={cards} />
      </div>
    </section>
  );
};
