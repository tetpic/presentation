'use client'
import { useParams } from 'next/navigation'
import { Card, db } from '../../../../../components/database/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useForm } from 'react-hook-form'
import CardsMenu from '../../../_components/Menu/menu'
import styles from './page.module.scss'
import EmptyParagraph from '../../../_components/EmptyParagraph/empty'
import RemoveButton from '../../../_components/RemoveButton/removeButton'
import { uploadFile } from '../../../_components/utils/uploadFile'
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
      seLabel: setItem?.label,
      faceLang: setItem?.faceLang,
      backLang: setItem?.backLang
    }
    await db.cards.add(dataToSend)
    methods.reset()
  }

  const importCards = () => {
    uploadFile().then(res => {
      if(res.cards as Card[]) {
        const cards = res.cards.map(el => {
          const {id, ..._card} = el
          return {
            ..._card,
            setName: setName,
            faceLang: setItem?.faceLang,
            backLang: setItem?.backLang
          }
        })
        db.cards.bulkAdd(cards as Card[])
      }
    })
  }



  return (<>
  <div className={styles.root} > 
    <CardsMenu type="setlist" setList={setItem} cards={cards}/>
    <button type={'button'} className={styles.importButton} onClick={importCards}>Импортировать карточки</button>
    {cards && cards.length === 0 &&
      <EmptyParagraph text='Тут пока нет ни одной карточки... добавьте первую!'/>
    } 
    
    {cards && 
      <div className={styles.cardsWrapper}>{
        cards.map((card, index) => {
          return (
            <div key={card.id + index} className={styles.cardInfo}>
              <p><span>{card.faceLang}:</span> {card.face} </p>
              <p><span>{card.backLang}:</span> {card.back} </p>
              <RemoveButton onClick={() => removeItem(card.id)}/>
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