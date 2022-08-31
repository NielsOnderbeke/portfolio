import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image"
import Project from "./components/project"

interface Props { }

const Projects: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {
    return (
        <section className="my-24">
            <h1 className="text-4xl text-center mb-10">Projects</h1>
            <div className="h-[75vh] grid grid-cols-3 bg-blue-50">
                <Project />
                <Project reverse />
                <Project />
            </div>
        </section>
    )
}

export default Projects