import type { NextPage } from 'next'
import { useRef, useState } from 'react'
import HomeHero from '../components/sections/home_hero'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'

const Home: NextPage = () => {

  const [mousePosition, setMousePosition] = useState({ x: -20, y: -20 });

  return (
    <div onMouseMove={(event) => setMousePosition((previous) => ({ ...previous, x: event.pageX, y: event.pageY }))} className="cursor-none">
      <div style={{ top: mousePosition.y, left: mousePosition.x }} className="w-8 h-8 rounded-full absolute animate-spin-slow z-[999]"><Cog8ToothIcon className='text-teal-500' /></div>
      <HomeHero />
    </div>
  )
}

export default Home
