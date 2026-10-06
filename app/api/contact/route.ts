import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Honeypot field: real visitors never see it, so anything here is a bot.
  if (clean(body.company, 200)) return Response.json({ ok: true })

  const firstName = clean(body.first_name, 100)
  const lastName = clean(body.last_name, 100)
  const email = clean(body.email, 320)
  const phone = clean(body.phone, 50)
  const message = clean(body.message, 5000)
  const name = `${firstName} ${lastName}`.trim()
  if (!firstName || !lastName || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: 'Name, a valid email, and a message are required' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error('Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL')
    return Response.json({ error: 'Contact form unavailable' }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'Bluebay Agency <onboarding@resend.dev>',
    to,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, '', 'Message:', message].join('\n'),
  })

  if (error) {
    console.error('Resend error', error)
    return Response.json({ error: 'Could not send inquiry' }, { status: 502 })
  }
  return Response.json({ ok: true })
}
