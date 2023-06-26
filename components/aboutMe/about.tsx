"use client"
import Image from "next/image"
import s from "./about.module.scss"
import myself from "../../images/myself.jpg"
import myselfMobile from "../../images/myselfMobile.png"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { textChangeRangeIsUnchanged } from "typescript"

export default function About () {
    const aboutWrapper = useRef<HTMLElement>(null!)
    const textParagraph = useRef<HTMLParagraphElement>(null!)
    const text = useRef<string>(null!)


    // const registerGsap = () => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     ScrollTrigger.create({
    //         trigger: "body",
    //         start: "top 30%",
    //         end: "bottom 100%",
    //         onUpdate: (self) => {
    //             let progress = self.progress * 100
    //             setText(progress)
    //             console.log(self.progress * 100)
    //         }
    //       });
    // }

    // const setText = (progress: number) => {
    //     let textArray = Array.from(text.current)
    //     let textLength = textArray.length
    //     let textToShow = textArray.slice(0, ~~((textLength/100)*progress + 200))
        

    //     textParagraph.current.innerHTML = textToShow.join("")
    // }

    const typeText = () => {
        let i = 0
        let textArray = Array.from(text.current)
        let textLength = textArray.length
        let interval = setInterval(()=>{
            textParagraph.current.innerHTML = textArray.slice(0, i).join("")
            if (i === textLength) {
                clearInterval(interval)
            } else {
                i = Math.random()*10 > 1?i+1:i-1
            }
        }, 50)
    }
  
    useEffect(()=> {
        text.current = textParagraph.current.innerHTML
        textParagraph.current.style.height = textParagraph.current.clientHeight + "px"
        textParagraph.current.style.opacity = "1"
        typeText()
    }, [])

  
    return <>
        <section className={s.about} ref={aboutWrapper}>
            <div className="content">
                {/* <h1 className={s.about__title}>О себе</h1> */}
                <div className={s.about__content}>
                    <picture className={s.about__image}>
                        <source srcSet={myselfMobile.src} media="(max-width: 1024px)"/>
                        <Image  alt={"userpic"} src={myself} />
                    </picture>
                    <div className={s.about__description}>
                        <p ref={textParagraph} style={{"opacity": 0}}>
                            Фамилия: Быков <br />
                            Имя: Никита <br />
                            Отчество: Ильич <br />
                            Профессия: Frontend разработчик
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}