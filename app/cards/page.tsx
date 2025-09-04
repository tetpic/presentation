'use client'
import { useLiveQuery } from "dexie-react-hooks";
import { Card, db } from "../../components/database/db";
import CardsLayout from "./_components/Layout/layout";
import EmptyParagraph from "./_components/EmptyParagraph/empty";
import { useEffect, useRef, useState } from "react";
import { shuffleArray } from "./_components/utils/shuffleArray";
import CardComponent from "./_components/Card/card";

export default function CardsPage () {
  const cards = useLiveQuery(() => db.cards.toArray());
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
  
    return (
      <>
        {cards?.length === 0 &&
          <EmptyParagraph text="Тут пока нет ни одной карточки... Перейдите в список наборов и добавьте первый набор!"/>
        }
        {cards && 
        <CardsLayout>
          {(randomCards || cards).map((card) => {
            return (
              <CardComponent {...card} key={card.id} reverseMode={userSettings?.[0]?.cardInitialSide === 'back'}/>
            )
          })}
        </CardsLayout>}
      </>
    )
}