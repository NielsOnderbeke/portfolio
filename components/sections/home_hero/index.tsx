/* eslint-disable @next/next/no-img-element */
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import HeaderLink from "./components/header-link";
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react"

interface Props { }

const HomeHero: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)


  return (
    <section className="bg-gradient-to-b from-teal-900 via-teal-700 to-teal-400 shadow-xl">
      <header className="lg:shadow-sm font-mono shadow-teal-900 grid items-center md:justify-center p-4 h-16 bg-teal-900 shadow-sm text-white fixed z-50 top-0 left-0 right-0">
        <nav className="md:hidden flex justify-between items-center">
          <h1 className="text-lg">ONN</h1>
          <Bars2Icon className="w-8" onClick={() => setShowMobileMenu(true)} /></nav>
        <nav className="hidden md:block" ><ul className="grid grid-flow-col gap-12"><HeaderLink title="Projects" href="#projects" /><HeaderLink title="Job" href="#job" /><HeaderLink title="Learning rader" href="#learning-radar" /><HeaderLink title="Blog" href="#blog" /><HeaderLink title="Contact" href="#contact" /></ul></nav>
      </header>
      <header className={`fixed top-0 left-12 bottom-0 right-0 z-50 bg-teal-700 font-mono shadow-xl transition-transform duration-300 ease-out ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center text-white p-4">
          <h1 className="text-2xl">Navigate</h1>
          <XMarkIcon className="w-8" onClick={() => setShowMobileMenu(false)} />
        </div>
        <nav>
          <ul className="grid gap-10 p-6 text-white text-lg" onClick={() => setShowMobileMenu(false)}>
            <HeaderLink title="Projects" href="#projects" /><HeaderLink title="Job" href="#job" /><HeaderLink title="Learning rader" href="#learning-radar" /><HeaderLink title="Blog" href="#blog" /><HeaderLink title="Contact" href="#contact" />
          </ul>
        </nav>
      </header>
      <main className="h-[calc(90vh-4rem)] md:h-[calc(100vh-4rem)] mt-[4rem] grid place-items-center overflow-hidden">
        <div className="relative p-4 md:p-8 lg:p-10 group">
          <div className="font-mono lowercase -rotate-[4deg] text-white relative z-20 text-shadow-black">
            <h1 className="text-5xl md:text-7xl lg:text-8xl lg:group-hover:-translate-x-12 transition-all duration-200">Niels</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl">Onderbeke</h1>
            <div className="absolute right-0">
              <h2 className="text-sm md:text-lg lg:text-2xl lg:group-hover:translate-x-12 transition-all duration-200 animate-typing overflow-hidden border-r-2 border-solid border-white whitespace-nowrap invisible">Full Stack Web Dev</h2>
            </div>
          </div>
          <img className="w-24 md:w-40 lg:w-44 absolute -top-16 md:-top-28 -left-6 md:-left-16 -rotate-6 drop-shadow-lg hover:animate-pulse" src="/img/svg/nodeSticker.svg" alt="node js logo" />
          <img className="w-24 md:w-40 absolute -bottom-24 md:-bottom-40 -left-4 md:-left-20 rotate-6 drop-shadow-lg hover:animate-pulse" src="/img/svg/nextSticker.svg" alt="next js logo" />
          <img className="w-20 md:w-32 absolute -bottom-24 md:-bottom-36 -right-6 md:-right-16 drop-shadow-lg hover:animate-pulse" src="/img/svg/sassSticker.svg" alt="sass logo" />
          <img className="w-10 md:w-20 absolute -bottom-28 md:-bottom-44 left-32 md:left-40 lg:left-60 drop-shadow-lg hover:animate-spin" src="/img/svg/tailwindSticker.svg" alt="tailwindcss logo" />
          <img className="w-20 md:w-32 absolute -top-16 md:-top-28 -right-2 md:-right-8 drop-shadow-lg hover:animate-spin-slow" src="/img/svg/nestSticker.svg" alt="nest js logo" />
        </div>
      </main>
    </section>
  )
}

export default HomeHero
