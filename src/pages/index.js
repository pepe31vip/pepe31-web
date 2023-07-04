import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/Containers/Hero'
import About from '@/Containers/About'
import Tokenomics from '@/Containers/Tokenomics'
import Community from '@/Containers/Community'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-[#191A19] justify-between py-12 ${inter.className}`}
    >
      <Hero id="#home"></Hero>
      <About id="#about"></About>
      <Tokenomics id="#token"></Tokenomics>
      <Community id="#community"></Community>
    </main>
  )
}
