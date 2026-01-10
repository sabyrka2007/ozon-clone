import { Apple, BriefcaseBusiness, CreditCard, Plane } from 'lucide-react'
import { PagesConfig } from '@/config/pages.config'

export const topMenu = [
  {
    title: 'Ozon fresh',
    icon: Apple,
    href: PagesConfig.FRESH,
    variant: 'fresh',
  },
  {
    title: 'Ozon Карта',
    icon: CreditCard,
    href: PagesConfig.OZON_CARD,
  },
  {
    title: 'Билеты, отели',
    icon: Plane,
    href: PagesConfig.AIR_TICKETS,
  },
  {
    title: 'Для бизнеса',
    icon: BriefcaseBusiness,
    href: PagesConfig.FOR_BUSINESS,
  },
  {
    title: 'Одежда',
    href: PagesConfig.CLOTHING,
  },
  {
    title: 'Электроника',
    href: PagesConfig.ELECTRONICS,
  },
  {
    title: 'Дом и сад',
    href: PagesConfig.HOME_AND_GARDEN,
  },
  {
    title: 'Товары за 1₽',
    href: PagesConfig.PRODUCTS_FOR_1_RUB,
  },
  {
    title: 'Сертификаты',
    href: PagesConfig.CERTIFICATES,
  },
] as const