interface IColorMap {
    [index: string]: string;
}

export type TColor = "blue" | "purple" | "teal" | "orange" | "pink"

export const colorMap: IColorMap = {
    teal: "teal-500",
    blue: "blue-500",
    orange: "orange-500",
    pink: "pink-500", 
    purple: "violet-500"
}