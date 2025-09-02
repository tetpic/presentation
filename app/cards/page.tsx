'use client'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../components/database/db";
import Card from "./_components/Card/card";
import CardsLayout from "./_components/Layout/layout";
import CardsMenu from "./_components/Menu/menu";
import EmptyParagraph from "./_components/EmptyParagraph/empty";

export default function CardsPage () {
  const cards = useLiveQuery(() => db.cards.toArray());
  
    return (
      <>
        {cards?.length === 0 &&
          <EmptyParagraph text="Тут пока нет ни одной карточки... Перейдите в список наборов и добавьте первый набор!"/>
        }
        {cards && 
        <CardsLayout>
          {cards.map((card) => {
            return (
              <Card {...card}/>
            )
          })}
        </CardsLayout>}
      </>
    )
}