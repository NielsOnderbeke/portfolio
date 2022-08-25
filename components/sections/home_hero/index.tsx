import type { NextComponentType, NextPageContext } from "next";
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
        <div className="font-prompt -rotate-12">
          <h1 className="text-8xl">Niels</h1>
          <h1 className="text-8xl ml-12">Onderbeke</h1>
          <h2 className="font-4xl text-right -mr-12">Full Stack Web Dev</h2>
        </div>
      </main>
    </section>
  )
}

export default HomeHero
