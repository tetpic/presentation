import s from "./header.module.scss"
import  { TetLogo, PicLogo } from "./logo"
import Navigation from "./navigation"

export default function MainHeader() {
    

    return (<>
    <header  className={s.header}>
        <TetLogo/>
        <Navigation/>
        <PicLogo/>
    </header>
    </>)
}