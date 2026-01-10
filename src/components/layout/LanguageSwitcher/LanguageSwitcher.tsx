'use client'

import { LANGUAGES } from '@/components/layout/LanguageSwitcher/languages.data'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage = pathname.split('/')[1] as 'ru' | 'en'

  const toggleHandler = () => {
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en'

    Cookies.set('locale', newLanguage, { path: '/' })

    const restPath = pathname.replace(/^\/(ru|en)/, '')

    router.push(`/${newLanguage}${restPath}`)
  }

  const language = LANGUAGES.find(
    (item) => item.code === currentLanguage,
  )

  return (
    <button
      onClick={toggleHandler}
      className="flex gap-2 p-0.5 rounded-sm cursor-pointer transition-all hover:bg-gray-200 group w-12"
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
