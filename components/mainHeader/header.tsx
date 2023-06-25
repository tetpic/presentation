import { concatStrings } from "../../helpers/common"
import s from "./header.module.scss"
import  { TetLogo, PicLogo } from "./logo"
import Navigation from "./navigation"

export default function MainHeader() {
    

    return (<>
    <header  className={s.header}>
        <div className={concatStrings([s.headerContent, " content"])}>
            <TetLogo/>
            <Navigation/>
            <PicLogo/>
        </div>
    </header>
    </>)
}