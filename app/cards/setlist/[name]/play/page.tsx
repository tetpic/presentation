'use client'
import { useParams } from 'next/navigation'
import { Card, db } from '../../../../../components/database/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useForm } from 'react-hook-form'
import CardsLayout from '../../../_components/Layout/layout'
import CardComponent from '../../../_components/Card/card'
import CardsMenu from '../../../_components/Menu/menu'
import styles from './page.module.scss'
import EmptyParagraph from '../../../_components/EmptyParagraph/empty'
import RemoveButton from '../../../_components/RemoveButton/removeButton'
interface Props {
}

type FormInputs = Omit<Card, 'id'>

export default function SetListPlay(props: Props) {
  const setName = useParams().name
  const cards = useLiveQuery(() => db.cards.where('setName').equals(setName).toArray());

  return (<>
    <div className={styles.root} > 
      {cards && cards.length === 0 &&
        <EmptyParagraph text='Тут пока нет ни одной карточки... добавьте первую!'/>
      } 
      {cards && 
        <CardsLayout>

        {
          cards.map((card, index) => {
            return (
              <CardComponent key={index} {...card}/>)
            })
          }
          </CardsLayout>
      }
    </div>
  </>)
}