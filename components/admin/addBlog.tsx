"use client"
import s from "./admin.module.scss"
import { RootState } from "../../redux/store/store"
import { useDispatch, useSelector } from "react-redux"
import { sendBlog, setBody, setTitle } from "../../redux/store/blogSlice"

export default function AddBlogForm() {
    let {title, body, error} = useSelector((state: RootState)=> state.blogs)
    let dispatch = useDispatch()

    let onChangeHandler = (event: { target: { name: string; value: string } }) =>{
        let {name, value} = event.target
  
        switch (name) {
            case "body":
                dispatch(setBody(value))
            break;

            case "title":
                dispatch(setTitle(value))
            break;
        }
    }

    
   
    return (<>
        <h6 className={s.admin__title}>Добавить новый блог</h6>
        <div className={s.admin__wrapper}> 
            <label>
                <p className={s.admin__label}>Введите заголовок</p>
                <input type="text" placeholder="текст" name="title" onChange={onChangeHandler} className={s.admin__titleEdit} value={title}/>
            </label>
            <p className={s.admin__label}>Введите текст блога</p>
            <textarea onChange={onChangeHandler} name="body" value={body} className={s.admin__bodyEdit}></textarea>
        </div>
        <button onClick={()=> dispatch(sendBlog())} className={s.admin__submitButton}>Создать</button>
        <p>{error}</p>
    </>)
}