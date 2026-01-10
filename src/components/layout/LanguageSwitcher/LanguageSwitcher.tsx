'use client'

import { LANGUAGES } from '@/components/layout/LanguageSwitcher/languages.data'
import { useMemo, useState } from 'react'

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ru'>('ru')

  const language = useMemo(() => {
    return LANGUAGES.find((item) => item.code === currentLanguage)
  }, [currentLanguage])

  return (
    <button
      key={language?.code}
      className="flex gap-2 p-0.5 rounded-sm cursor-pointer transition-all hover:bg-gray-200 dark:bg-gray-800 group w-12"
      onClick={() => {
        setCurrentLanguage((prev) => (prev === 'en' ? 'ru' : 'en'))
      }}
    >
      <span className="group-hover:rotate-6 transition-transform">
        {language?.flag}
      </span>
      <span className="uppercase opacity-50 transition-opacity group-hover:opacity-100">
        {language?.code}
      </span>
    </button>
  )
}