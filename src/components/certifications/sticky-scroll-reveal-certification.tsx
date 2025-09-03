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
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  // Track scroll and update active card
  const handleScroll = () => {
    if (!ref.current || contentRefs.current.length === 0) return;

    const containerHeight = ref.current.clientHeight;
    const scrollTop = ref.current.scrollTop;

    // หา index ของ content ที่อยู่ในตำแหน่งที่ดีที่สุดสำหรับการอ่าน (ประมาณ 1/3 บนของหน้าจอ)
    let currentIndex = 0;
    let minDistance = Infinity;

    contentRefs.current.forEach((element, index) => {
      if (!element) return;

      // ใช้ offsetTop และ scrollTop แทน getBoundingClientRect
      const elementTop = element.offsetTop - scrollTop;
      const elementHeight = element.offsetHeight;

      // ตรวจสอบว่า element อยู่ในพื้นที่ที่มองเห็น
      const viewportTop = 0;
      const viewportBottom = containerHeight;
      const elementBottom = elementTop + elementHeight;

      // ถ้า element อยู่ในพื้นที่มองเห็น
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        // คำนวณตำแหน่งที่ดีที่สุดสำหรับการอ่าน (ประมาณ 30% จากด้านบน)
        const idealPosition = containerHeight * 0.3;
        const distance = Math.abs(elementTop - idealPosition);

        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = index;
        }
      }
    });

    setActiveCard(currentIndex);
  };

  // ใช้ useEffect เพื่อ attach scroll listener
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    // เรียกทันทีเพื่อ set initial state
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [content]); // Re-attach when content changes

  // ไม่ใช้ useMotionValueEvent แล้ว แต่ยังคง useScroll ไว้เผื่อใช้งานอื่น
  useMotionValueEvent(scrollYProgress, "change", () => {
    // Keep this empty or remove if not needed
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

  // Optional: Uncomment if you want to auto-scroll to center
  // const scrollToCard = (index: number) => {
  //   const element = contentRefs.current[index];
  //   if (!element || !ref.current) return;

  //   const containerRect = ref.current.getBoundingClientRect();
  //   const elementRect = element.getBoundingClientRect();
  //   const elementTop = elementRect.top - containerRect.top + ref.current.scrollTop;
  //   const elementHeight = element.offsetHeight;
  //   const containerHeight = ref.current.clientHeight;

  //   // เลื่อนให้ element อยู่กึ่งกลางของ container
  //   const scrollPosition = elementTop - (containerHeight / 2) + (elementHeight / 2);

  //   ref.current.scrollTo({
  //     top: scrollPosition,
  //     behavior: 'smooth'
  //   });
  // };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className='relative flex h-full justify-center space-x-0 overflow-y-auto rounded-md p-10 gap-0'
      ref={ref}>
      <div className='div w-2/3 relative flex items-start px-2'>
        <div className='w-full'>
          {/* ลด padding ด้านบนให้น้อยลง */}
          <div className='h-[10vh]' />

          {content?.map((item, index) => (
            <div
              key={item.title + index}
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className='w-full mb-20'>
              <div className='relative'>
                <motion.h2
                  initial={{
                    opacity: 0.3,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    scale: activeCard === index ? 1 : 0.95,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className='text-2xl font-bold text-slate-100 pr-8'>
                  {item.title}
                </motion.h2>

                {item?.link && (
                  <motion.div
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className='absolute top-0 right-0 text-white hover:text-blue-500 cursor-pointer hover:scale-105 active:scale-95'>
                    <Tooltip value={item?.link} position='top'>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Link />
                      </a>
                    </Tooltip>
                  </motion.div>
                )}

                <motion.div
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}>
                  {[
                    {
                      label: "Certificate number",
                      value: item?.certificate_no,
                    },
                    { label: "Date of issue", value: item?.date_issue },
                  ]?.map(({ label, value }, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex gap-1 text-slate-300 text-sm mt-1",
                        value ? "" : "hidden"
                      )}>
                      <p>{label}:</p>
                      <p className='font-medium'>{value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{
                  opacity: 0.3,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className='text-kg min-w-full mt-5 max-w-sm text-slate-300'>
                {item?.description}
              </motion.div>
            </div>
          ))}

          {/* ลด padding ด้านล่างให้น้อยลง */}
          <div className='h-[30vh]' />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-0 hidden h-[100%] w-1/3 overflow-hidden lg:block px-3",
          contentClassName
        )}>
        <div className='w-full h-full flex justify-center items-center'>
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className='max-h-[90%] max-w-[100%]'>
            {content?.[activeCard]?.content ?? null}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
