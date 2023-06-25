"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { concatStrings } from "../../helpers/common"
import s from "./header.module.scss"

const links = [
    {name: "О себе", link: "/"},
    {name: "Проекты", link: "/projects"},
    {name: "Музыка", link: "/music"},
    {name: "Блог", link: "/blog"},
]

export default function Navigation () {
    let path = usePathname() 

    return (<nav className={s.navigation}>
        {
            links.map((el, index)=> {
                let isActive = (path === "/" && el.link === "/")?true:(path !== "/"&&el.link !== "/")?path.startsWith(el.link):false
                return <Link key={index} href={el.link} className={concatStrings([s.navLink, (isActive?s.navLink_active:"")])}>{el.name}</Link>

            })
        }
    </nav>)
}