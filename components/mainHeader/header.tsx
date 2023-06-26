import { concatStrings } from "../../helpers/common"
import s from "./header.module.scss"
import  { TetLogo, PicLogo } from "./logo"
import Navigation from "./navigation"
import Image from 'next/image'
import backPaper from "../../images/paper-background.jpg"

export default function MainHeader() {
    

    return (<>
    <header  className={s.header}>
        <Image className={s.header__background} src={backPaper} alt="paper-background" />
        <div className={concatStrings([s.headerContent, " content"])}>
            <TetLogo/>
            <Navigation/>
            <PicLogo/>
        </div>
    </header>
    </>)
}