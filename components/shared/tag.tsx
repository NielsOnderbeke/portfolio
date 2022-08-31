import type { NextComponentType, NextPageContext } from "next";
import { colorMap, TColor } from "../../utils/color";

interface Props {
    name: string,
    color: TColor
}

const Tag: NextComponentType<NextPageContext, {}, Props> = (
    { name, color }: Props,
) => {
    return (
        <div className={`rounded-full px-4 py-1 text-white max-w-max bg-${colorMap[color]}`}>
            {name}
        </div>
    )
}

export default Tag