'use client'
import { useParams } from 'next/navigation'
import { Card, db } from '../../../../../components/database/db'
import { useLiveQuery } from 'dexie-react-hooks'
import CardsLayout from '../../../_components/Layout/layout'
import CardComponent from '../../../_components/Card/card'
import styles from './page.module.scss'
import EmptyParagraph from '../../../_components/EmptyParagraph/empty'
import { Switch } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { shuffleArray } from '../../../_components/utils/shuffleArray'
interface Props {
}


export default function SetListPlay(props: Props) {
  const setName = useParams().name
  const cards = useLiveQuery(() => db.cards.where('setName').equals(setName).toArray());
  const userSettings = useLiveQuery(() => db.userSettings.toArray());
  const [randomCards, setRandomCardsState] = useState<Card[] | null>(null)
  const isInitialSuffled = useRef(false)
  

  const shuffleCards = (needShuffle: boolean) => {
    if(needShuffle) {
      setRandomCardsState(shuffleArray(cards as Card[]))
    } else {
      setRandomCardsState(null)
    }
  }

  useEffect(()=>{
    if(userSettings?.[0] && cards && cards.length > 0 && !isInitialSuffled.current) {
      isInitialSuffled.current = true
      shuffleCards(userSettings?.[0].alwaysShuffleCards === 'true')
    }
  }, [userSettings, cards])

  return (<>
    <div className={styles.root} > 
      {cards && cards.length === 0 &&
        <EmptyParagraph text='Тут пока нет ни одной карточки... добавьте первую!'/>
      } 
      {cards && 

        <CardsLayout>
        {
          (randomCards || cards).map((card, index) => {
            return (
              <CardComponent key={index} {...card} reverseMode={userSettings?.[0]?.cardInitialSide === 'back'}/>)
            })
          }
        </CardsLayout>
      }
    </div>
  </>)
}