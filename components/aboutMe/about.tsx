"use client"
import Image from "next/image"
import s from "./about.module.scss"
// import myself from "../../images/myself.jpg"
// import myselfMobile from "../../images/myselfMobile.png"
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import slide1 from "../../images/slide1.jpg"
// import slide2 from "../../images/slide2.jpg"
// import slide3 from "../../images/slide3.jpg"
// import slide4 from "../../images/slide4.jpg"
// import tet from "../../images/tet.png"
// import pic from "../../images/pic.png"
import wires from "../../images/wires.svg"
import { concatStrings } from "../../helpers/common"


import { Canvas, useLoader  } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
    const gltf = useLoader(GLTFLoader, '/avocado/Avocado.gltf')
    return <primitive object={gltf.scene} />
}

export default function About () { 
  
    return <>
        <section className={s.about}>          
            <picture className={s.about__background}>
                <Image src={wires}  alt="wires background"/>
            </picture>

            <Canvas camera={{fov: 6, position: [0, 0, 1]}}>             
                <ambientLight intensity={0.1} />
                <directionalLight position={[1, 1, 1]} intensity={0.8} />
                <OrbitControls target={[0, 0, 0]} autoRotate={true}/>
                <mesh position={[0, -0.03, 0]}>
                  <Model/>
                  <meshStandardMaterial />
                </mesh>
            </Canvas>

        </section>
        <section className={s.gallery}>           
        </section>
        {/* <section className={s.project}>
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
                        Во третью - это отличная возможность скинуть кому-то посмотреть мой сайт, и человек удобно ознакомится с проектами, да и со мной. Ведь как говорил великий философ Ф. Кайв: “Лучшая визитная карточка веб-разраба это его сайт”.
                    </p>
                    <p className={s.project__descItem}>
                        Р.S.: есть в планах, если в каком-нибудь из отпусков будет слишком пасмурная погода, да и чтобы хоть как-то оправдать название проекта - сделать тут мини игру тетрис. Мне опыт, и кому-то время убить, поразвлекаться.
                    </p>
                </div>
            </div>
        </section> */}
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
                            25.06.2023: Развернул проект на next.js не используя create next app.
                        </p>
                        <p className={s.changelog__item}>
                            1.07.2023: Сделал футер, где есть неоновая вывеска, <br /> которая моргает и передает свет на соседний элемент. <br />
                            Так же добавил лампу, которая подсвечивает данные по контактам.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
}