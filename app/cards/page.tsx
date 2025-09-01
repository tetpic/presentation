'use client'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../components/database/db";
import Card from "./_components/Card/card";
import CardsLayout from "./_components/Layout/layout";
import { useEffect } from "react";
import Cookies from 'js-cookie'

export default function CardsPage () {
  const cards = useLiveQuery(() => db.cards.toArray());

  useEffect(()=>{
    const yandexReturnedData = window.location.href.split('#')[1]
    if (yandexReturnedData) {
      const data = new URLSearchParams(yandexReturnedData)
      const accessToken = data.get('access_token')
      const expires = data.get('expires_in')
      Cookies.remove('yandex_token', { path: '/' })
      Cookies.set('yandex_token', accessToken, { expires: Number(expires), path: '/' })
    }
  }, [])

  useEffect(()=>{
    const data = fetch('https://cloud-api.yandex.net/v1/disk/resources/files',
    {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        Authorization: `OAuth ${Cookies.get('yandex_token')}`
      }
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((res) => {
      console.log(res)
    })
  }, [])

  const onClick = () => {
    // fetch('https://oauth.yandex.ru/authorize?response_type=token&client_id=7f28a2c18915497184275c939accbd8c')
    // .then((res) => {
    //   debugger
    //   console.log(res)
    // })
    // .catch((err) => {
    //   debugger
    //   console.log(err)
    // })
    window.open('https://oauth.yandex.ru/authorize?response_type=token&client_id=7f28a2c18915497184275c939accbd8c')
  }

  
    return (
      <CardsLayout>
        <button type="button" onClick={onClick}>Авторизоваться на яндекс.диск</button>
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
    )
}