'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import CustomCursor from '../components/cursor/CustomCursor';

interface CursorContextType {
  cursorType: 'default' | 'hover' | 'text' | 'hidden';
  setCursorType: (type: 'default' | 'hover' | 'text' | 'hidden') => void;
  setCursorColor: (color: string) => void;
  setCursorSize: (size: number) => void;
}

// Export the context
export const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text' | 'hidden'>('default');
  const [cursorColor, setCursorColor] = useState('rgba(59, 181, 74, 0.15)');
  const [cursorSize, setCursorSize] = useState(15);

  const value = {
    cursorType,
    setCursorType,
    setCursorColor,
    setCursorSize
  };

  return (
    <CursorContext.Provider value={value}>
      {children}
      {cursorType !== 'hidden' && (
        <CustomCursor
          bgColor={cursorColor}
          size={cursorSize}
          hoverScale={cursorType === 'hover' ? 4 : cursorType === 'text' ? 2 : 1}
        />
      )}
    </CursorContext.Provider>
  );
}

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
};