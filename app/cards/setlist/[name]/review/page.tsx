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



  return (<div className={styles.root} > 
    <CardsMenu type="setlist" setList={setItem} cards={cards}/>
    {cards && cards.length === 0 &&
      <p className={styles.empty}>Тут пока нет ни одной карточки... добавьте первую!</p>
    } 
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className={styles.form}>

      <label className={styles.label} >
        <p>Лицевая сторона</p>
        <input type="text" {...methods.register('face')} />
      </label>
      <label  className={styles.label} >
        <p>Обратная сторона</p>
        <input type="text" {...methods.register('back')} />
      </label>
      <label className={styles.label} >
        <p>Ссылка на изображение</p>
        <input type="text" {...methods.register('imageLink')} />
      </label>
      </div>
      <button type="submit" className={styles.submit}>
        Добавить карточку
      </button>
    </form>

    <CardsLayout>
    {
      cards && cards.map((card, index) => {
        return (
          <CardComponent {...card}/>
        )
      })
    }
    </CardsLayout>
  </div>)
}