'use client'
import styles from './menu.module.scss'
import { Card, db, Sets } from '../../../../components/database/db'
import { downloadJSON } from '../utils/downloadJSON'

interface Props {
  type: 'all' | 'setlist'
  setList?: Sets
  cards?: Card[] 
}

export default function CardsMenu(props: Props) {

  const uploadDBonDisk = async () => {
    if(props.type === 'all') {

      const setlist = await db.sets.toArray()
      const cards = await db.cards.toArray()
      downloadJSON({
        setlist: setlist,
        cards: cards
      }, 'all_sets')
    }
    if(props.type === 'setlist') {
      downloadJSON({
        ...props.setList,
        cards: props.cards
      }, props.setList.label)
    }
  }

  return (<div className={styles.root}> 
  
  {
    props.setList && <p className={styles.title}>{props.setList?.label}</p>
  }

    {props.type === 'setlist' && props.cards?.length > 0 &&
    <button type='button' onClick={uploadDBonDisk} className={styles.button} >
      Экспортировать набор
    </button> 
    }
    {
      props.type === 'all' &&
    <button type='button' onClick={uploadDBonDisk} className={styles.button} >
      Скачать все наборы
    </button> 
    }
  </div>)
}