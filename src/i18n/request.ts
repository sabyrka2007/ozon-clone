import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/dist/server/request/cookies'

export default getRequestConfig(async () => {
  const store = await cookies()
  const locale = store.get('locale')?.value || 'ru'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})