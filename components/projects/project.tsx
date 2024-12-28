import s from "./projects.module.scss"
import Link from "next/link"

export default function Project () {
    return (<>
    <article className={s.project__item}>
        <h6 className={s.project__title}>
            Птицы и пчёлы
        </h6>
        <p className={s.project__description}>
            Простой лендинг для ресторана. Мог бы быть более крупным коммерческим проектом, но к сожалению дальнейшая судьба его неизвестна. <br />
            Тут использовались Vanilla JS,  Swiper, SCSS. <br />
            Полностью адаптивный, на мобильной версии появляется бургер-меню. Присутствует простая сортировка. <br />
            Спустя время, после того как я его сделал, у меня остается от этого проекта чувство легкости и немного детской наивности. <br />
        </p>
        <p className={s.project__linkWrapper}>
            Познакомиться с проектом на гитхабе можно по этой ссылке:  <Link href="https://github.com/tetpic/bnb-student-project">Birds and Bees GIT</Link> <br />
            Прямая ссылка на GIT Pages:  <Link href="https://tetpic.github.io/bnb-student-project/">Birds and Bees Page</Link> <br />
        </p>
        <img className={s.project__image} src={'/images/projects/birdsandbees.png'} alt="project image" width={700} height={357} ></img>
    </article>
    </>)
}