'use client'
import Link from 'next/link'
import styles from './layout.module.scss'
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../components/database/db';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode
}

export default function CardsRootLayout(props: Props) {
  const userSettings = useLiveQuery(() => db.userSettings.toArray());

  useEffect(()=>{
    if(userSettings && userSettings?.[0]?.theme) {
      document.body.dataset.theme = userSettings?.[0]?.theme
    }
  }, [userSettings])


  return (
    <div className={styles.root}>
      <div className={styles.navigation}>
        <Link href={'/cards'} className={styles.link}>Все карточки</Link>
        <Link href={'/cards/setlist'} className={styles.link}>Список наборов</Link>
        <Link href={'/cards/settings'} className={styles.link}>Настройки</Link>
      </div>
      {props.children}
    </div>
  )
}