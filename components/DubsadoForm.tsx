'use client'

import Script from 'next/script'

// Dubsado inquiry form, auto-resized to its content by iframe-resizer.
const FORM_URL = 'https://hello.dubsado.com/public/form/view/69cd745fdaed1883b751ed8d?iframe=true'

declare global {
  interface Window {
    iFrameResize?: (options: { checkOrigin: boolean }, target?: string) => void
  }
}

export default function DubsadoForm() {
  return (
    <>
      <iframe
        id="dubsado-form"
        src={FORM_URL}
        title="Contact form"
        frameBorder={0}
        width="100%"
        height="750"
        style={{ display: 'block', width: '100%' }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
        strategy="afterInteractive"
        onReady={() => {
          setTimeout(() => window.iFrameResize?.({ checkOrigin: false }, '#dubsado-form'), 30)
        }}
      />
    </>
  )
}
