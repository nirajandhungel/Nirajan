import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactRequestBody {
  name: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json() as ContactRequestBody

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.EMAIL_RECEIVER!,
      subject: `New message from ${name}`,
      replyTo: email,
      text: message
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
