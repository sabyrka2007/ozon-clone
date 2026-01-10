import { topMenu } from '@/components/layout/TopMenu/top-menu.data'
import Link from 'next/link'
import cn from 'clsx'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { Dot } from 'lucide-react'

export const TopMenu = () => {
  return (
    <div className="flex justify-between items-center pb-5 px-5 bg-white">
      <nav className="flex gap-5 items-center">
        {topMenu.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              'flex gap-1 items-center transition-all hover:opacity-100 hover:text-primary opacity-50',
              item.variant === 'fresh' && 'text-teal-600 opacity-100 font-medium',
            )}
          >
            {item.icon && <item.icon
              size={16}
              className="mr-0.5"
            />}
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center text-sm">
        <div className="font-medium flex items-center">
          <span className="transition-all hover:text-gray-500 cursor-pointer">
            Москва
          </span>
          <Dot />
          <button className="text-primary font-semibold cursor-pointer">
            Укажите вдрес
          </button>
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}