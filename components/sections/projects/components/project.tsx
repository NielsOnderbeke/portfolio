import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import { TColor } from "../../../../utils/color";
import Tag from "../../../shared/tag"

interface Props { }

const Project: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {
    const tags: any = [{ name: "React Native", color: "blue" }, { name: ".NET Web API", color: "teal" }, { name: "EF Core", color: "red" }];

    return (
        <article className="w-full h-full relative group overflow-hidden">
            <Image src="/img/jpg/healthapp.jpg" layout="fill" width={100} height={200} objectFit="cover" alt="heatlh app" />
            <span className="absolute inset-0 bg-white/20 hover:backdrop-blur-sm"></span>
            <div className="absolute top-full -translate-y-24 group-hover:-translate-y-full transition-all duration-200 left-0 right-0 w-full bg-gradient-to-b from-teal-900 to-teal-600 p-8 text-white">
                <h1 className="relative text-2xl mb-4 transition-transform duration-200">
                    Keep Healthy App
                </h1>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ul className="flex space-x-2 flex-wrap mb-4">{tags.map((tag: any) => (<li key={tag.name}><Tag {...tag} /></li>))}</ul>
                    <p>Sed venenatis tincidunt mi, non facilisis nibh ullamcorper lobortis. In tempus congue efficitur. Proin lobortis tempor tortor non porta. Suspendisse semper urna scelerisque, suscipit lorem ut, auctor augue. Integer posuere, ex vitae tempus rhoncus, arcu arcu accumsan nisi.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Project