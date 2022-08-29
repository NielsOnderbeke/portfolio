/* eslint-disable @next/next/no-img-element */
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import HeaderLink from "./components/header-link";
import { Bars2Icon } from '@heroicons/react/24/solid'

interface Props { }

const HomeHero: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <section className="bg-gradient-to-b from-teal-900 via-teal-700 to-teal-400">
      <header className="lg:shadow-sm font-mono shadow-teal-800 grid items-center md:justify-center p-4 h-16 text-white">
        <Bars2Icon className="text-white w-6 justify-self-end md:hidden" />
        <nav className="hidden md:block" ><ul className="grid grid-flow-col gap-12"><HeaderLink title="Projects" href="#projects" /><HeaderLink title="Job" href="#job" /><HeaderLink title="Learning rader" href="#learning-radar" /><HeaderLink title="Blog" href="#blog" /><HeaderLink title="Contact" href="#contact" /></ul></nav>
      </header>
      <main className="h-[calc(75vh-4rem)] md:h-[calc(100vh-4rem)] grid place-items-center overflow-hidden">
        <div className="relative p-4 lg:p-20 group">
          <div className="font-mono lowercase -rotate-[4deg] text-white relative z-20 text-shadow-black">
            <h1 className="text-5xl lg:text-8xl lg:group-hover:-translate-x-12 transition-all duration-200">Niels</h1>
            <h1 className="text-5xl lg:text-8xl">Onderbeke</h1>
            <div className="absolute right-0">
              <h2 className="text-sm lg:text-2xl lg:group-hover:translate-x-12 transition-all duration-200 animate-typing overflow-hidden border-r-2 border-solid border-white whitespace-nowrap">Full Stack Web Dev</h2>
            </div>
          </div>
          <img className="w-24 absolute -top-16 -left-6 -rotate-6" src="/img/svg/nodeSticker.svg" alt="node js logo" />
          <img className="w-24 absolute -bottom-24 -left-6 rotate-6" src="/img/svg/nextSticker.svg" alt="next js logo" />
          <img className="w-20 absolute -bottom-24 -right-6" src="/img/svg/sassSticker.svg" alt="sass logo" />
          <img className="w-10 absolute -bottom-28 left-32 -" src="/img/svg/tailwindSticker.svg" alt="tailwindcss logo" />
          <img className="w-20 absolute -top-16 -right-2" src="/img/svg/nestSticker.svg" alt="nest js logo" />
        </div>
      </main>
    </section>
  )
}

export default HomeHero
