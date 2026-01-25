"use client";

import { useEffect, useState, useCallback, useContext } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { CursorContext } from "../../providers/CursorProvider";

interface CustomCursorProps {
  size?: number;
  bgBlurSize?: number;
  bgColor?: string;
  hoverScale?: number;
  speed?: number;
}

export default function CustomCursor({
  size = 15,
  bgBlurSize = 300,
  bgColor = "rgba(59, 181, 74, 0.15)",
  hoverScale = 3,
  speed = 0.1,
}: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Get cursor type from context
  const cursorContext = useContext(CursorContext);
  const cursorType = cursorContext?.cursorType || "default";

  // Motion values for smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Circle - smooth chase with medium spring physics
  const circleX = useSpring(mouseX, {
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  });

  const circleY = useSpring(mouseY, {
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  });

  // Cloud - ultra smooth chase with soft spring physics
  const cloudX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 1.5,
  });

  const cloudY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 1.5,
  });

  // Handle mouse movement
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    // Add mouse event listeners
    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  // Determine if we're hovering based on cursorType
  const isHovering = cursorType === "hover" || cursorType === "text";

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <>
          {/* Layer 3: Cloud/Blur - Largest, slowest, most smooth */}
          <motion.div
            className="cursor-cloud"
            style={{
              position: "fixed",
              left: -120,
              top: -120,
              x: cloudX,
              y: cloudY,
              width: 260,
              height:260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59, 181, 74, 0.25) 0%, rgba(59, 181, 74, 0.08) 50%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
              // zIndex: 9998,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.8 : 0.6,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />

          {/* Layer 2: Circle - Medium size, smooth chase, green border */}
          <motion.div
            className="cursor-circle"
            style={{
              position: "fixed",
              left: -24,
              top: -24,
              x: circleX,
              y: circleY,
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "2px solid #3bb54a",
              backgroundColor: "transparent",
              pointerEvents: "none",
              zIndex: 9999,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: isHovering ? 1.8 : 1,
              borderColor: isHovering ? "#22c55e" : "#3bb54a",
              backgroundColor: isHovering
                ? "rgba(59, 181, 74, 0.1)"
                : "transparent",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />

          {/* Layer 1: Dot - Small, instant, at cursor tip */}
          <motion.div
            className="cursor-dot"
            style={{
              position: "fixed",
              left: -5,
              top: -5,
              x: mousePosition.x,
              y: mousePosition.y,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#3bb54a",
              pointerEvents: "none",
              zIndex: 10000,
              transform: "translate(-50%, -50%)",
              boxShadow:
                "0 0 10px rgba(59, 181, 74, 0.6), 0 0 20px rgba(59, 181, 74, 0.3)",
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
              backgroundColor: isHovering ? "#22c55e" : "#3bb54a",
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
