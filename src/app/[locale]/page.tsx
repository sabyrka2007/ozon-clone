import { Header } from '@/components/layout/Header'
import { TopMenu } from '@/components/layout/TopMenu'
import Image from 'next/image'
import { Slider } from '@/components/pages/home/Slider'

export default function Home() {
  return (
    <div className='container-custom mx-auto'>
      <Header />
      <TopMenu />
      <Image
        src="/banner.png"
        alt="Banner"
        width={1500}
        height={90}
        draggable={false}
      />
      <Slider />
    </div>
  )
}