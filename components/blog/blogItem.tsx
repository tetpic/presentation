
import s from "./blog.module.scss"
import {BlogObject} from "./blogsObject"

export default function BlogItem(props: BlogObject) {
    return (<>
    <article className={s.blog__item}>
        <h6 className={s.blog__title}>{props.title}</h6>
        <p className={s.blog__description}> {props.description}
        </p>
        <p className={s.blog__timestamp}>
            {props.timeStamp}
        </p>
    </article>
    </>)
}