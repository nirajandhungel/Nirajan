'use client';

import { useCursor } from '../providers/CursorProvider';

export const useCursorHover = () => {
  const { setCursorType } = useCursor();

  const handleMouseEnter = () => {
    setCursorType('hover');
  };

  const handleMouseLeave = () => {
    setCursorType('default');
  };

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
};

export const useCursorText = () => {
  const { setCursorType } = useCursor();

  const handleMouseEnter = () => {
    setCursorType('text');
  };

  const handleMouseLeave = () => {
    setCursorType('default');
  };

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
};