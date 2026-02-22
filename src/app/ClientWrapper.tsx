'use client'

import React from 'react'
import { EnquiryProvider } from './EnquiryContext'
import Footer from '../components/footer'
import dynamic from 'next/dynamic';
const EnquiryModal = dynamic(() => import('../components/EnquiryModal'), { ssr: false });
const AuditModal = dynamic(() => import('../components/AuditModal'), { ssr: false });
const WhatsAppButton = dynamic(() => import('../components/whatsapp-button'), { ssr: false });
import { useEnquiryModal } from './EnquiryContext'
import  Header  from '../components/navbar/header'

function ClientContent({ children }: { children: React.ReactNode }) {
  const { isEnquiryOpen, openEnquiry, closeEnquiry, isAuditOpen, closeAudit } = useEnquiryModal()

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header onOpenEnquiry={openEnquiry} />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
      <AuditModal isOpen={isAuditOpen} onClose={closeAudit} />
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

