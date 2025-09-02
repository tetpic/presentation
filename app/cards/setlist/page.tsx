'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { Card, db, Sets } from "../../../components/database/db"
import { useLiveQuery } from "dexie-react-hooks"
import Link from "next/link"
import styles from './page.module.scss'
import EmptyParagraph from "../_components/EmptyParagraph/empty"
import RemoveButton from "../_components/RemoveButton/removeButton"
import { useRouter } from "next/navigation"
import { uploadFile } from "../_components/utils/uploadFile"
import CardsMenu from "../_components/Menu/menu"

interface Props {
}

type FormInputs = Omit<Sets, 'id' | 'name'>



export default function SetList(props: Props) {
  const methods = useForm<FormInputs>()
  const nav = useRouter()
  const sets = useLiveQuery(() => db.sets.toArray());
  const cards = useLiveQuery(() => db.cards.toArray());

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const name = encodeURI(data.label.toLowerCase())
    await db.sets.add(
     {
      ...data,
      name
     }
    ).catch(err=> {
      console.warn(err)
    })
    methods.reset()
    alert(`набор "${data.label}" успешно создан`)
  }

  const removeSet = (set: Sets) => {
    const confirmResponce = confirm(`Вы действительно хотите удалить набор "${set.label}"? Все связанные карточки тоже будут удалены!`) 
    if(!confirmResponce) return
    db.cards.where('setName').equals(set.label).delete().then(res => {
      db.sets.delete(set.id).then(res => {
        alert(`Набор "${set.label}" успешно удален!`)
      })
    })
  }

  const addCardsToSetList = (set: Sets) => {
    nav.push('/cards/setlist/' + set.name + '/review')
  }

  const importCardSet = () => {
    uploadFile().then(res => {
      if(res.setlist && res.cards && res.cards.length > 0) {
        const cards = res.cards.map(el => {
          const {id, ..._card} = el
          return {
            ..._card,
          }
        })
        db.cards.bulkAdd(cards as Card[])
      }
      if(res.setlist && res.setlist.length > 0) {
        const setLists = res.setlist.map(el => {
          const {id, ..._set} = el
          return {
            ..._set,
          }
        })
        db.sets.bulkAdd(setLists)
      }  
    })
  }


  return (<div className={styles.root}> 
    <p className={styles.title}>Список наборов</p>
    <CardsMenu type="all"/>
    
    <button type={'button'} onClick={importCardSet} className={styles.importButton}>Загрузить наборы</button>
    {sets?.length === 0 &&
      <EmptyParagraph text='Тут пока нет ни одного набора... Но всегда можно создать первый!'/>
    }

    {sets && 
      <div className={styles.setlist}>
        {
          sets?.map(set => (
            <Link className={styles.set} key={set.id} href={'/cards/setlist/' + set.name + '/play'}>
              <p>{set.label}</p>
              <p><span>Язык лицевой стороны:</span> {set.faceLang}</p>
              <p><span>Язык обратной стороны:</span> {set.backLang}</p>
              <p><span>Количество карточек:</span> {cards?.filter(card => card.setName === set.name).length}</p>
              <RemoveButton onClick={() => removeSet(set)}/>
              <button className={styles.edit} onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addCardsToSetList(set)
              }}>+</button>
            </Link>
          )
          ) 
        }
      </div>
    }
    

    <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.formWrapper} >
      <div className={styles.form}>
      <label >
        <p>Название набора</p>
        <input type="text" {...methods.register('label', { required: true })} />
      </label>
      <label >
        <p>Язык лицевой стороны</p>
        <select  {...methods.register('faceLang', { required: true })} >
          <option value="RU">Русский</option>
          <option value="DE">Немецкий</option>
          <option value="TR">Турецкий</option>
          <option value="EN">Английский</option>
          <option value="GE">Грузинский</option>
        </select>
      </label>
      <label >
        <p>Язык обратной стороны</p>
        <select  {...methods.register('backLang', { required: true })} >
          <option value="RU">Русский</option>
          <option value="DE">Немецкий</option>
          <option value="TR">Турецкий</option>
          <option value="EN">Английский</option>
          <option value="GE">Грузинский</option>
        </select>
      </label>
      </div>
      <button type="submit" className={styles.submit}>Создать</button>
    </form>
  </div>)
}