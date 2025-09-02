/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { FC, useEffect, useRef, useState } from "react";
import { Tooltip } from "../ui/tooltip";

export type TStickyScrollCertificationProps = {
  content: {
    title: string;
    certificate_no?: string;
    date_issue?: string;
    link?: string;
    tags?: string[];
    description?: React.ReactNode | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
};

export const StickyScrollCertification: FC<TStickyScrollCertificationProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
    "#1e293b", // slate-800
    "#111827", // gray-900
    "#1f2937", // gray-800
    "#111111", // dark black
    "#1c1c1e", // very dark gray
    "#212121", // dark neutral
    "#161616", // charcoal
    "#1a1a1a", // deep gray
    "#0d0d0d", // almost black
    "#1b1b23", // slate charcoal
    "#131313", // blackish gray
    "#181818", // neutral dark
    "#1f1f1f", // dark slate
    "#101010", // extra dark gray
    "#2c2c2c", // dark steel
    "#202020", // grayish black
    "#242424", // soft black
  ];

  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
      "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
      "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ],
    []
  );

  const [, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='relative flex h-full justify-center space-x-0 overflow-y-auto rounded-md p-10 gap-0'
      ref={ref}>
      <div className='div w-full relative flex items-start px-2 '>
        <div className='w-full'>
          {content?.map((item, index) => (
            <div key={item.title + index} className=' w-full my-20'>
              <div className=' relative'>
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className='text-2xl font-bold text-slate-100 pr-2'>
                  {item.title}
                </motion.h2>
                {item?.link && (
                  <div className=' absolute top-0 -right-2 text-white hover:text-blue-500 cursor-pointer hover:scale-105 active:scale-95'>
                    <Tooltip value={item?.link} position='top'>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Link />
                      </a>
                    </Tooltip>
                  </div>
                )}
                {[
                  { label: "Certificate number", value: item?.certificate_no },
                  { label: "Date of issue", value: item?.date_issue },
                ]?.map(({ label, value }, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-1 text-slate-300",
                      value ? "" : "hidden"
                    )}>
                    <p>{label} :</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg min-w-full mt-5 max-w-sm text-slate-300'>
                {item?.description}
              </motion.div>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-0 hidden h-[100%] w-120 overflow-hidden lg:block px-3 ",
          contentClassName
        )}>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='max-h-[90%] max-w-[100%]'>
            {content?.[activeCard]?.content ?? null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
