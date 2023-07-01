"use client"
import Image from "next/image"
import s from "./footer.module.scss"
import lamp from "../../images/footer-lamp.png"
import { useEffect, useRef } from "react"
import { concatStrings } from "../../helpers/common"



export default function MainFooter () {

    const footerElement = useRef(null!)
    const lampElement = useRef(null!)
    const contactsElement = useRef(null!)

    function getMousePosition() {
        let footer: HTMLElement = footerElement.current
        let lamp: HTMLElement = lampElement.current
        let contacts: HTMLElement = contactsElement.current
        let lampPosition = lamp.offsetLeft
        let contactPosition = contacts.offsetLeft

        if(footer) {
            footer.addEventListener("mousemove", (event)=> {
                let x = event.pageX - footer.offsetLeft

                lamp.style.cssText = `transform: translateX(${x - lampPosition}px);`
                contacts.style.cssText = `background-position: ${(x - contactPosition)+50}px`

                console.log(x)

            })
            
        }
    }

    useEffect(getMousePosition, [])

    return (<footer className={s.footer}>
        <div ref={footerElement} className="content">
            <div className={s.footer__wrapper}>
                <p className={s.footer__copy}>
                    Мрачный подвал...
                </p>
                <div className={s.footer__lampWrapper} ref={lampElement}>
                    <Image className={s.footer__lamp} src={lamp} alt="footer lamp"/>                    
                </div>
                <p className={s.footer__contactsLogo}>Contacts:</p>
                <div className={s.footer__contactsWrapper} ref={contactsElement}>                 
                    <p className={concatStrings([s.footer__contact, s.footer__contact_effect])}>mail: bull1604@yandex.ru</p>
                    <p className={s.footer__contact}>telegram: @rabustes</p>
                </div>
            </div>
        </div>
    </footer>)
}