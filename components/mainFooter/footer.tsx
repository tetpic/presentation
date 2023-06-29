import Image from "next/image"
import s from "./footer.module.scss"
import lamp from "../../images/footer-lamp.png"

export default function MainFooter () {
    return (<footer className={s.footer}>
        <div className="content">
            <div className={s.footer__wrapper}>
                <p className={s.footer__copy}>
                    Мрачный подвал...
                </p>
                <Image className={s.footer__lamp} src={lamp} alt="footer lamp"/>
            </div>
        </div>
    </footer>)
}