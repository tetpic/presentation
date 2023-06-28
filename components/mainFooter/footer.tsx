import s from "./footer.module.scss"

export default function MainFooter () {
    return (<footer className={s.footer}>
        <p className={s.footer__copy}>
            © TETPIC Studio, 2023г. <span>Все права могли бы быть защищены.</span>
        </p>
    </footer>)
}