import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: ReactNode;
  value: ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  value,
  position = "top",
  delay = 0,
  className = "",
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 260, damping: 20 };

  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-50, 50], [-5, 5]), springConfig);
  const translateX = useSpring(
    useTransform(x, [-50, 50], [-10, 10]),
    springConfig
  );

  useEffect(() => {
    if (showTooltip && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      let x = rect.left + rect.width / 2;
      let y = rect.top;

      switch (position) {
        case "bottom":
          y = rect.bottom;
          break;
        case "left":
          x = rect.left;
          y = rect.top + rect.height / 2;
          break;
        case "right":
          x = rect.right;
          y = rect.top + rect.height / 2;
          break;
        default: // top
          y = rect.top;
          break;
      }

      setTooltipPosition({ x, y });
    }
  }, [showTooltip, position]);

  const handleMouseEnter = (): void => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, delay);
    } else {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = (): void => {
    setShowTooltip(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  function measureTextWidth(
    text: string,
    font: string = "16px ui-sans-serif"
  ): number {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = font;
    return context.measureText(text).width;
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const relativeX = event.clientX - rect.left - centerX;
    x.set(relativeX);
  };

  const getPositionStyles = (): React.CSSProperties => {
    const gap = 50;

    switch (position) {
      case "bottom":
        return {
          position: "fixed",
          left: tooltipPosition.x - measureTextWidth(String(value)) / 2,
          top: tooltipPosition.y + gap,
          transform: "translateX(-50%)",
        };
      case "left":
        return {
          position: "fixed",
          left: tooltipPosition.x - gap,
          top: tooltipPosition.y - measureTextWidth(String(value)) / 2,
          transform: "translate(-100%, -50%)",
        };
      case "right":
        return {
          position: "fixed",
          left: tooltipPosition.x + gap,
          top: tooltipPosition.y - measureTextWidth(String(value)) / 2,
          transform: "translateY(-50%)",
        };
      default: // top
        return {
          position: "fixed",
          left: tooltipPosition.x - measureTextWidth(String(value)) / 2,
          top: tooltipPosition.y - gap,
          transform: "translate(-50%, -100%)",
        };
    }
  };

  const getArrowClasses = (): string => {
    switch (position) {
      case "bottom":
        return "absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45";
      case "left":
        return "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45";
      case "right":
        return "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45";
      default: // top
        return "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45";
    }
  };

  return (
    <div
      ref={triggerRef}
      className='relative inline-block'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}>
      {children}
      {showTooltip &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: position === "top" ? 10 : position === "bottom" ? -10 : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                  ...getPositionStyles(),
                  translateX:
                    position === "top" || position === "bottom"
                      ? translateX
                      : 0,
                  rotate:
                    position === "top" || position === "bottom" ? rotate : 0,
                  zIndex: 99999,
                }}
                className='pointer-events-none'>
                <div
                  className={`relative px-4 py-2.5 text-sm text-white bg-gray-900 rounded-lg shadow-xl whitespace-nowrap ${className}`}>
                  <div className={getArrowClasses()} />
                  <div className='relative z-10'>{value}</div>
                  {/* Gradient effects */}
                  <div className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />
                  <div className='absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

// Export type for external use
export type { TooltipPosition, TooltipProps };
