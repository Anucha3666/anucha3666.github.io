"use client";

import { cn } from "@/lib/utils";
import { Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Tab = {
  title: string;
  value: string;
  length: number;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<Tab | null>(null);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  const handleMaximize = (tab: Tab) => {
    setPopupContent(tab);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  // Close popup with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPopupOpen) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isPopupOpen]);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full hover:bg-[#FFFFFFA0]",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}>
            {active.value === tab.value && (
              <motion.div
                layoutId='clickedbutton'
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className='relative block text-black dark:text-white cursor-pointer'>
              {tab?.title ?? ""}
            </span>

            {tab?.length > 0 && (
              <div className='w-5 h-5 flex justify-center items-center absolute -top-2 -right-0 text-xs font-bold rounded-full bg-red-500 text-white'>
                {tab?.length}
              </div>
            )}
          </button>
        ))}
      </div>

      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-8", contentClassName)}
        onMaximize={handleMaximize}
      />

      {/* Fullscreen Popup - Direct HTML approach */}
      <AnimatePresence>
        {isPopupOpen && popupContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='popup-overlay'
            onClick={closePopup}
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "50",
              boxSizing: "border-box",
            }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "white",
                borderRadius: "0px",
                width: "100vw",
                height: "100vh",
                maxWidth: "none",
                maxHeight: "none",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                margin: "0",
                position: "relative",
              }}>
              {/* Content */}
              <div
                style={{
                  flex: 1,
                  overflow: "auto",
                }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  className=' relative bg-black'>
                  {popupContent.content}
                  <div className='absolute top-6 left-6 flex text-white'>
                    <span className='relative block text-4xl text-white font-bold'>
                      {popupContent?.title ?? ""}
                    </span>

                    {popupContent?.length > 0 && (
                      <div className='w-5 h-5 flex justify-center items-center text-xs font-bold rounded-full bg-red-500 text-white'>
                        {popupContent?.length}
                      </div>
                    )}
                  </div>
                  <div
                    onClick={closePopup}
                    className='absolute top-6 right-6 p-2 rounded-full text-white hover:text-red-500 bg-black bg-opacity-20 hover:scale-110 active:scale-90 cursor-pointer  hover:bg-opacity-40 transition-all duration-200 group'>
                    <X className='w-5 h-5 ' />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  onMaximize,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
  onMaximize?: (tab: Tab) => void;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className='relative w-full h-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "w-full h-full absolute top-0 left-0 rounded-b-md overflow-hidden shadow-lg",
            className
          )}>
          {tab.content}
          <div
            onClick={() => onMaximize?.(tab)}
            className='absolute top-6 right-6 p-2 rounded-full  bg-black bg-opacity-20 hover:scale-110 active:scale-90 cursor-pointer  hover:bg-opacity-40 transition-all duration-200 group'>
            <Maximize2 className='w-5 h-5 text-white' />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
