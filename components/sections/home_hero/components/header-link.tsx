import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

interface Props {
    title: string,
    href: string
}

const HeaderLink: NextComponentType<NextPageContext, {}, Props> = (
  {title, href}
) => {
  return (
      <li><Link href={href}>{title}</Link></li>
  )
}

export default HeaderLink