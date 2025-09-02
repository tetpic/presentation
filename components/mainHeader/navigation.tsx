"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { concatStrings } from "../../helpers/common"
import s from "./header.module.scss"

const links = [
    {name: "CARDS", link: "/cards"},
    // {name: "PROJECTS", link: "/projects"},
    // {name: "BLOG", link: "/blog"},
    // {name: "MUSIC", link: "/music", disabled: true},
    // {name: "DEV", link: "/dev", disabled: true},
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
        {/* <div className={s.navigation__admin}>
            <Link href="/login" className={concatStrings([s.navLink, s.navLink_disabled])}>LOG IN</Link>
            <Link href="/admin" className={concatStrings([s.navLink, s.navLink_disabled])}>TETPIC <br/> STUDIO</Link>
        </div> */}
    </nav>)
}