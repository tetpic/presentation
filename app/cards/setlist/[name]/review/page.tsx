'use client'
import { useParams } from 'next/navigation'
import { Card, db } from '../../../../../components/database/db'
import { useEffect } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { useForm } from 'react-hook-form'

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



  return (<div > 
    {cards && cards.length === 0 &&
      <p>Тут пока нет ни одной карточки... добавьте первую!</p>
    } 
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <label >
        <p>Лицевая сторона</p>
        <input type="text" {...methods.register('face')} />
      </label>
      <label >
        <p>Обратная сторона</p>
        <input type="text" {...methods.register('back')} />
      </label>
      <label >
        <p>Ссылка на изображение</p>
        <input type="text" {...methods.register('imageLink')} />
      </label>
      <button type="submit">
        Добавить карточку
      </button>
    </form>

    {
      cards && cards.map((card, index) => {
        return (
          <div key={index}>
            <p>{card.face}</p>
            <p>{card.back}</p>
          </div>
        )
      })
    }
  </div>)
}