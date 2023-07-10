"use client"
import s from "./admin.module.scss"
import { RootState } from "../../redux/store/store"
import { useSelector } from "react-redux"

export default function AddBlogForm() {
    let {title, body} = useSelector((state: RootState)=> state.blogs)
    console.log(title, body)
    return (<>
        <h6 className={s.admin__title}>Добавить новый блог</h6>
        <div className={s.admin__wrapper}> 
            <label>
                <p className={s.admin__label}>Введите заголовок</p>
                <input type="text" placeholder="текст" className={s.admin__titleEdit}/>
            </label>
            <p className={s.admin__label}>Введите текст блога</p>
            <div contentEditable suppressContentEditableWarning={true} className={s.admin__bodyEdit}>Напишите сюда текст</div>
        </div>
        <button className={s.admin__submitButton}>Создать</button>
    </>)
}