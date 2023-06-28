"use client"
import Image from "next/image"
import s from "./about.module.scss"
import myself from "../../images/myself.jpg"
import myselfMobile from "../../images/myselfMobile.png"
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../images/slide1.jpg"
import slide2 from "../../images/slide2.jpg"
import slide3 from "../../images/slide3.jpg"
import slide4 from "../../images/slide4.jpg"
import { concatStrings } from "../../helpers/common"

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
            if(!textParagraph.current) {
                clearInterval(interval)
                return 
            }
            textParagraph.current.innerHTML = textArray.slice(0, i).join("")
            if(!textParagraph.current) {
                clearInterval(interval)
                return
            }
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
            <div className={"content"}>
                <h1 className={s.about__title}>Досье</h1>
                <div className={s.about__content}>
                    <picture className={s.about__image}>
                        <source srcSet={myselfMobile.src} media="(max-width: 1024px)"/>
                        <Image  alt={"userpic"} src={myself} />
                    </picture>
                    <div className={s.about__description}>
                        <p ref={textParagraph} style={{"opacity": 0}}>
                            Имя: Никита <br />
                            Фамилия: Быков <br />
                            Отчество: Ильич <br />
                            Профессия: Frontend разработчик <br />
                            Место рождения: Удмуртия, Сарапул, Котово <br />
                            Любимая цитата: "Сгорел сарай гори и хата" <br />
                            Занимаюсь разработкой с 2020 года.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={s.gallery}>
            <p className={concatStrings(["content", s.gallery__title])}>Галерея</p>
            <Swiper 
            spaceBetween={10}
            slidesPerView="auto"
            loop={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide1} alt="slide1"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide2} alt="slide2"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide3} alt="slide3"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide4} alt="slide4"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide1} alt="slide1"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide2} alt="slide2"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide3} alt="slide3"/></SwiperSlide>
                <SwiperSlide className={s.gallery__swiperSlide} ><Image className={s.gallery__image} src={slide4} alt="slide4"/></SwiperSlide>
            </Swiper>
        </section>
    </>
}