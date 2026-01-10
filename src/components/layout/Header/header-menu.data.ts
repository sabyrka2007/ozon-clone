import { User, Package, Heart, ShoppingBasket } from 'lucide-react'
import { PagesConfig } from '@/config/pages.config'

export const headerMenu = [
  {
    title: 'Войти',
    icon: User,
    href: PagesConfig.LOGIN,
  },
  {
    title: 'Заказы',
    icon: Package,
    href: PagesConfig.ORDERS,
  },
  {
    title: 'Избранное',
    icon: Heart,
    href: PagesConfig.FAVORITES,
  },
  {
    title: 'Корзина',
    icon: ShoppingBasket,
    href: PagesConfig.CART,
  },
] as const