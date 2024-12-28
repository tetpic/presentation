import s from "./header.module.scss"
import { concatStrings } from '../../helpers/common'

export  function TetLogo() {
    return (<>
        <img  src={'/images/tet.png'} className={s.imageLogo}
        width={80}
        height={100}
        alt="Picture of the logo"/>
        </>
    )
}

export function PicLogo() {
    return (<>
        <img  src={'/images/pic.png'} className={concatStrings([s.imageLogo, s.imageLogo_second])}
        width={80}
        height={100}
        alt="Picture of the other side of logo"/>
        </>
    )
}

export function MainLogo() {
    return (<>
     <img  src={'/images/tetpic-logo-fulled.png'} className={concatStrings([s.imageLogo, s.imageLogo_second])}
        width={124}
        height={77}
        alt="Picture of logo"/>
    </>)
}
