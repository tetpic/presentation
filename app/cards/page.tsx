'use client'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../components/database/db";
import Card from "./_components/Card/card";
import CardsLayout from "./_components/Layout/layout";
import CardsMenu from "./_components/Menu/menu";

export default function CardsPage () {
  const cards = useLiveQuery(() => db.cards.toArray());
  
    return (
      <>
        <CardsMenu type={"all"}/>
        <CardsLayout>
          {cards?.length === 0 &&
            <p>Тут пока нет ни одной карточки... добавьте первую!</p>
          }
          {
            cards && cards.map((card) => {
              return (
                <Card {...card}/>
              )
            })
          }
        </CardsLayout>
      </>
    )
}