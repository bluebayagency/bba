'use client'

import { useTranslation } from 'react-i18next'
import { FAQList } from './sections'

export default function FAQ() {
  const { t } = useTranslation()

  return (
    <section className="bg-white pt-40 md:pt-52 pb-28 md:pb-40">
      <FAQList headingLevel="h1" eyebrow={t('faq.eyebrow')} />
    </section>
  )
}
