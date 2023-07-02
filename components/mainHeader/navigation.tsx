"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { concatStrings } from "../../helpers/common"
import s from "./header.module.scss"

const links = [
    {name: "PROJECTS", link: "/projects"},
    {name: "BLOG", link: "/blog"},
    {name: "/* MUSIC */", link: "/music", disabled: true},
    {name: "/* DEV */", link: "/dev", disabled: true},
    {name: "ABOUT", link: "/"},
]

export default function Navigation () {
    let path = usePathname() 

    return (<nav className={s.navigation}>
        {
            links.map((el, index)=> {
                let isActive = (path === "/" && el.link === "/")?true:(path !== "/"&&el.link !== "/")?path.startsWith(el.link):false
                return <Link key={index} href={el.link} className={concatStrings([s.navLink, (isActive?s.navLink_active:""), (el.disabled?s.navLink_disabled:"")])}>{el.name}</Link>
            })
        }
    </nav>)
}