import Image from 'next/image'
import tet from "../../images/tet.png"
import pic from "../../images/pic.png"
import full from "../../images/tetpic-logo-fulled.png"
import s from "./header.module.scss"
import { concatStrings } from '../../helpers/common'

export  function TetLogo() {
    return (<>
        <Image  src={tet} className={s.imageLogo}
        width={80}
        priority
        height={100}
        alt="Picture of the logo"/>
        </>
    )
}

export function PicLogo() {
    return (<>
        <Image  src={pic} className={concatStrings([s.imageLogo, s.imageLogo_second])}
        width={80}
        priority
        height={100}
        alt="Picture of the other side of logo"/>
        </>
    )
}

export function MainLogo() {
    return (<>
     <Image  src={full} className={concatStrings([s.imageLogo, s.imageLogo_second])}
        width={124}
        priority
        height={77}
        alt="Picture of logo"/>
    </>)
}
