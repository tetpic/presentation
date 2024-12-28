"use client"
import s from "./about.module.scss"
import { concatStrings } from "../../helpers/common"

export default function About () { 
  
    return <>
        <section className={s.about}>          
            <picture className={s.about__background}>
                <img src={'/images/wires.svg'}  alt="wires background"/>
            </picture>
        </section>
        <section className={s.gallery}>           
        </section>
        <section className={s.project}>
            <div className="content">
                <div className={s.project__titleWrapper}>
                    <img src={'/images/tet.png'} width={82} height={100} alt={"tet logo"}/>
                    <h6 className={concatStrings([s.title, s.project__title])}>О проекте TETPIC</h6>
                    <img src={'/images/pic.png'} width={82} height={100} alt={"pic logo"}/>
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
                            25.06.2023: Развернул проект на next.js не используя create next app.
                        </p>
                        <p className={s.changelog__item}>
                            1.07.2023: Сделал футер, где есть неоновая вывеска, <br /> которая моргает и передает свет на соседний элемент. <br />
                            Так же добавил лампу, которая подсвечивает данные по контактам.
                        </p>
                        <p className={s.changelog__item}>
                            25.07.2023: Слегка перерисовал макет в Figma, <br /> 
                            добавил идею 3d модели на главной странице. <br />
                            Планирую добавить анимацию.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}