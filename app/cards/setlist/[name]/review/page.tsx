'use client'
import { useParams } from 'next/navigation'
import { Card, db } from '../../../../../components/database/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useForm } from 'react-hook-form'
import CardsLayout from '../../../_components/Layout/layout'
import CardComponent from '../../../_components/Card/card'
import CardsMenu from '../../../_components/Menu/menu'
import styles from './page.module.scss'
interface Props {
}

type FormInputs = Omit<Card, 'id'>

export default function SetListReview(props: Props) {
  const setName = useParams().name
  const setItem = useLiveQuery(() => db.sets.where('name').equals(setName).first());
  const cards = useLiveQuery(() => db.cards.where('setName').equals(setName).toArray());

  const removeItem = (id: number) => {
    db.cards.delete(id).then(res => {
    })
  }



  const methods = useForm<FormInputs>()

  const onSubmit = async (data: FormInputs) => {
    const dataToSend = {
      ...data,
      setName: setName,
      faceLang: setItem?.faceLang,
      backLang: setItem?.backLang
    }
    await db.cards.add(dataToSend)
  }



  return (<>
    <CardsMenu type="setlist" setList={setItem} cards={cards}/>
  <div className={styles.root} > 
    {cards && cards.length === 0 &&
      <p className={styles.empty}>Тут пока нет ни одной карточки... добавьте первую!</p>
    } 
    {cards && 
      <div className={styles.cardsWrapper}>{
        cards.map((card, index) => {
          return (
            <div key={card.id + index} className={styles.cardInfo}>
              <p><span>{card.faceLang}:</span> {card.face} </p>
              <p><span>{card.backLang}:</span> {card.back} </p>
              <button className={styles.remove} type='button' onClick={() => removeItem(card.id)}>X</button>
            </div>
          )
        })
      }</div>
    }
    {setItem &&
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.form}>

        <label className={styles.label} >
          <p>Лицевая сторона <span>({setItem?.faceLang})</span></p>
          <input type="text" {...methods.register('face', {required: true})} />
        </label>
          {methods.formState.errors.face && <p className={styles.error}>Обязательное поле</p>}
        <label  className={styles.label} >
          <p>Обратная сторона <span>({setItem?.backLang})</span></p>
          <input type="text" {...methods.register('back', {required: true})} />
        </label>
          {methods.formState.errors.back && <p className={styles.error}>Обязательное поле</p>}
        <label className={styles.label} >
          <p>Ссылка на изображение</p>
          <input type="text" {...methods.register('imageLink')} />
        </label>
        </div>
        <button type="submit" className={styles.submit}>
          Добавить карточку
        </button>
      </form>
    }



  </div>
    </>

  )
}