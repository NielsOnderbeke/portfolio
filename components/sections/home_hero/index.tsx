import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import HeaderLink from "./components/header-link";

interface Props { }

const HomeHero: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <section>
      <header className="shadow-sm shadow-gray-200 grid place-items-center p-4 h-16">
        <nav><ul className="grid grid-flow-col gap-6"><HeaderLink title="Projects" href="#projects" /><HeaderLink title="Job" href="#job" /></ul></nav>
      </header>
      <main className="h-[calc(100vh-4rem)] grid place-items-center">
        <div className="relative p-20 group">
          <div className="font-prompt -rotate-12">
            <h1 className="text-8xl group-hover:-translate-x-12 transition-all duration-200">Niels</h1>
            <h1 className="text-8xl ">Onderbeke</h1>
            <h2 className="font-4xl text-right group-hover:translate-x-12 transition-all duration-200 text-teal-500 group-hover:text-orange-500">Full Stack Web Dev</h2>
          </div>
          <div className="absolute top-2 -left-40 animate-fly-slow hover:pause-animation">
            <Image src="/img/png/at-dynamic-color.png" width={150} height={150} alt="at icon" />
          </div>
          <div className="absolute -top-16 right-10 animate-fly-medium hover:pause-animation">
            <Image className="absolute" src="/img/png/tool-dynamic-color.png" width={150} height={150} alt="at icon" />
          </div>
          <div className="absolute -bottom-30 -left-20 animate-fly-reverse-slow hover:pause-animation">
            <Image className="absolute" src="/img/png/setting-dynamic-color.png" width={150} height={150} alt="at icon" />
          </div>
          <div className="absolute -right-20 -bottom-20 animate-fly-reverse-medium hover:pause-animation">
            <Image src="/img/png/hash-dynamic-color.png" width={150} height={150} alt="at icon" />
          </div>
          <div className="absolute">
          </div>
        </div>
      </main>
    </section>
  )
}

export default HomeHero
