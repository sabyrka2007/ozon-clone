import { topMenu } from '@/components/layout/TopMenu/top-menu.data'
import Link from 'next/link'
import cn from 'clsx'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

export const TopMenu = () => {

  // TODO: Location mock
  // TODO: Language selector

  return (
    <div>
      <nav className="flex gap-5 items-center px-5 pb-5 bg-white">
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

      <div className="font-medium">
        Москва &qt;
        <button className="text-primary font-semibold">
          Укажите вдрес
        </button>
      </div>

      <div>
        <LanguageSwitcher />
      </div>
    </div>
  )
}