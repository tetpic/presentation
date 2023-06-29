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
import tet from "../../images/tet.png"
import pic from "../../images/pic.png"
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

    // const typeText = () => {
    //     let i = 0
    //     let textArray = Array.from(text.current)
    //     let textLength = textArray.length
    //     let interval = setInterval(()=>{
    //         if(!textParagraph.current) {
    //             clearInterval(interval)
    //             return 
    //         }
    //         textParagraph.current.innerHTML = textArray.slice(0, i).join("")
    //         if(!textParagraph.current) {
    //             clearInterval(interval)
    //             return
    //         }
    //         if (i === textLength) {
    //             clearInterval(interval)
    //         } else {
    //             i = Math.random()*10 > 1?i+1:i-1
    //         }
    //     }, 50)
    // }
  
    useEffect(()=> {
        text.current = textParagraph.current.innerHTML
        textParagraph.current.style.height = textParagraph.current.clientHeight + "px"
        textParagraph.current.style.opacity = "1"
        // typeText()
    }, [])

  
    return <>
        <section className={s.about} ref={aboutWrapper}>
            <div className={"content"}>            
                <div className={s.about__content}>
                    <picture className={s.about__image}>
                        <source srcSet={myselfMobile.src} media="(max-width: 1024px)"/>
                        <Image  alt={"userpic"} src={myself} />
                    </picture>
                    <div className={s.about__description}>
                        <p ref={textParagraph} style={{"opacity": 0}}>
                        Салют, меня зовут Никита, я фронтенд разработчик. Я пришел к этому не сразу. 
                        Я не хочу писать о себе в ключе стека технологий, которыми  владею. 
                        Для этого есть резюме и портфолио.  Я не учился программированию в школе, 
                        колледже или университете. Мой диплом вообще по физкультуре и спорту.  
                        Многое, что я делал раньше, было тесно связано с творечством и техникой 
                        одновременно. 20 лет я занимался танцевальным спортом, достиг определенных 
                        успехов, которыми далеко не многие могут похвастаться. Был отличным 
                        преподавателем танцев в школе и в частной практике. Отличным, по крайней 
                        мере потому, что многим нравилось как я преподаю и я старался делать 
                        это так, как хотел бы, чтобы преподавали мне. Больше 10 лет периодически 
                        занимаюсь музыкой, но это всегда было как хобби, как то, чем можно 
                        увлечься по уши. Умею играть на ударной установке, гитаре и бас гитаре. 
                        Пока был в армии научился играть на губной гормошке.  Для всего 
                        этого требуется технический склад ума. Чтобы играть на музыкальных 
                        инструментах - нужно много разбираться в теории, в физике 
                        колебаний и волн. Для того чтобы танцевать - требуется хорошая 
                        подготовленность в знаниях как оптимизировать движение, как оно 
                        должно выполняться. Чтобы писать музыку в секвенсоре - надо отлично 
                        понимать как работает волна, как они накладываются, как сводить вместе 
                        несколько дорожек, и чтобы это приятно звучало. Как синтезировать звуки. 
                        Занимаясь фронтендом, я чувствую, что это на самом деле для меня 
                        привычное, я так же ищу способы решения тех или иных задач, оптимизации, 
                        и проявляю творческий подход в реализации различных интерактивных 
                        компонентов. А главное - всей душой люблю то чем я занимался, 
                        и то, чем занимаюсь сейчас.

                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={s.gallery}>           
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
        <section className={s.project}>
            <div className="content">
                <div className={s.project__titleWrapper}>
                    <Image src={tet} width={82} height={100} alt={"tet logo"}/>
                    <h6 className={concatStrings([s.title, s.project__title])}>О проекте TETPIC</h6>
                    <Image src={pic} width={82} height={100} alt={"pic logo"}/>
                </div>
                <div className={s.project__description}>
                    <p className={s.project__descItem}>
                        Название я придумал еще в 2020 году, когда увлекался написанием музыки на секвенсоре, и думал что буду продавать свои биты. Я закину несколько треков в проект для того, чтобы не пришлось что-то делать с авторскими правами на использование чужих дорожек.
                    </p>
                    <p className={s.project__descItem}> 
                        В первую очередь, данный сайт это сайт портфолио и навигации по проектам со ссылками на гитхаб и, возможно, ссылками и комментариями на рабочие проекты, исходный код которых писал я. 
                    </p>
                    <p className={s.project__descItem}>
                        Во вторую это блог, в котором буду публиковать какие-то статьи, возможно отзывы по собеседованиям, если они окажутся интересными. И другой околопрограммистский флуд. 
                    </p>
                    <p className={s.project__descItem}>
                        В третьих - это отличная возможность скинуть кому-то посмотреть мой сайт, и человек удобно ознакомится с проектами, да и со мной. Ведь как говорил великий философ Ф. Кайв: “Лучшая визитная карточка веб-разраба это его сайт”.
                        Р.S.: есть в планах, если в каком-нибудь из отпусков будет слишком пасмурная погода, да и чтобы хоть как-то оправдать название проекта - сделать тут мини игру тетрис. Мне опыт, и кому-то время убить, поразвлекаться.
                    </p>
                </div>
            </div>
        </section>
        <section className={s.changelog}>
            <div className={concatStrings([s.changelog__content, "content"])}>
                <h6 className={concatStrings([s.title, s.changelog__title]) }>
                    CHANGE LOG & NEWS
                </h6>
                <div className={s.changelog__itemsWrapper}>
                    <div className={s.changelog__items}>
                        <p className={s.changelog__itemsHead}>ONCE UPON A TIME...</p>
                        <p className={s.changelog__item}>
                            28.06.2023: Создал макет в Figma, где начал разрабатывать визуал для этого сайта. 
                        </p>
                        <p className={s.changelog__item}>
                            25.06.2023: Развернул проект на next.js не используя фреймворк.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
}