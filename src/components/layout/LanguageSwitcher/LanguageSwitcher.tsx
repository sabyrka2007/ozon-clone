import { LANGUAGES } from '@/components/layout/LanguageSwitcher/languages.data'

export const LanguageSwitcher = () => {
  return (
    <div>
      {LANGUAGES.map((item) => (
        <span
          key={item.code}
          className="flex gap-2 p-0.5 rounded-sm cursor-pointer transition-all hover:bg-gray-200 dark:bg-gray-800"
        >
          {item.flag}
          <span>{item.code.toUpperCase()}</span>
        </span>
      ))}
    </div>
  )
}