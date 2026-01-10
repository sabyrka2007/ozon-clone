'use client'

import Image from 'next/image'
import { LayoutGrid, Search } from 'lucide-react'
import { headerMenu } from './header-menu.data'

import Link from 'next/link'

import cn from 'clsx'
import { useTranslations } from 'next-intl'

export const Header = () => {
  const t = useTranslations('header')

  return (
    <header className="flex items-center gap-5 py-3 px-5 bg-white">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Ozon"
          width={120}
          height={60}
          unoptimized
        />
      </Link>

      <button
        type="button"
        className="bg-primary p-2 rounded-lg text-white flex items-center gap-2 transition-all cursor-pointer hover:bg-blue-600"
      >
        <LayoutGrid />
        <span>{t('catalogTitle')}</span>
      </button>

      <div className="rounded-xl p-1 flex items-center grow bg-primary">
        <input
          className="grow bg-white rounded-lg px-4 py-1.5"
          type="text"
          placeholder={t('searchPlaceholder')}
          value=""
          onChange={() => {
          }}
        />
        <button
          type="button"
          className="px-4 py-1.5 cursor-pointer bg-primary transition-all rounded-lg hover:bg-blue-600"
        >
          <Search color="#fff" />
        </button>
      </div>

      <div className="flex gap-5 items-center ml-2">
        {headerMenu.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              'flex items-center text-center flex-col transition-all hover:opacity-100 hover:text-primary opacity-50',
              index === 0 && 'opacity-100',
            )}
          >
            <item.icon size={20} />
            <span className="text-sm font-meduim">{item.title}</span>
          </Link>
        ))}
      </div>
    </header>
  )
}