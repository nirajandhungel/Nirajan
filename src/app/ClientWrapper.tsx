'use client'

import React from 'react'
import { EnquiryProvider } from './EnquiryContext'
import Footer from '../components/footer'
import EnquiryModal from '../components/EnquiryModal'
import WhatsAppButton from '../components/whatsapp-button'
import { useEnquiryModal } from './EnquiryContext'
import  Header  from '../components/navbar/header'

function ClientContent({ children }: { children: React.ReactNode }) {
  const { isEnquiryOpen, openEnquiry, closeEnquiry } = useEnquiryModal()

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header onOpenEnquiry={openEnquiry} />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
      <WhatsAppButton />
    </div>
  )
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      <ClientContent>{children}</ClientContent>
    </EnquiryProvider>
  )
}

