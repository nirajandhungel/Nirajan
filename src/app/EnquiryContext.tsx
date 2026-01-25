'use client'

import React, { createContext, useContext, useState } from 'react'

interface EnquiryContextType {
  isEnquiryOpen: boolean
  openEnquiry: () => void
  closeEnquiry: () => void
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined)

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  return (
    <EnquiryContext.Provider
      value={{
        isEnquiryOpen,
        openEnquiry: () => setIsEnquiryOpen(true),
        closeEnquiry: () => setIsEnquiryOpen(false),
      }}
    >
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiryModal() {
  const context = useContext(EnquiryContext)
  if (context === undefined) {
    throw new Error('useEnquiryModal must be used within an EnquiryProvider')
  }
  return context
}

