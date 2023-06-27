import Image from 'next/image'
import tet from "../../images/tet.png"
import pic from "../../images/pic.png"
import s from "./header.module.scss"
import { concatStrings } from '../../helpers/common'

export  function TetLogo() {
    return (<>
        <Image  src={tet} className={s.imageLogo}
        width={280}
        priority
        height={344}
        alt="Picture of the logo"/>
        </>
    )
}

export function PicLogo() {
    return (<>
        <Image  src={pic} className={concatStrings([s.imageLogo, s.imageLogo_second])}
        width={280}
        priority
        height={344}
        alt="Picture of the other side of logo"/>
        </>
    )
}
