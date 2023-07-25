import { concatStrings } from "../../helpers/common"
import s from "./header.module.scss"
import  {MainLogo } from "./logo"
import Navigation from "./navigation"

export default function MainHeader() {
    

    return (<>
    <header  className={s.header}>
        <div className={concatStrings([s.headerContent, " content"])}>
            <MainLogo/>
            <Navigation/>
        </div>
    </header>
    </>)
}