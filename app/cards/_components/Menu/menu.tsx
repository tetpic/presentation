'use client'
import Link from 'next/link'
import styles from './menu.module.scss'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Card, db, Sets } from '../../../../components/database/db'

interface Props {
  type: 'all' | 'setlist'
  setList?: Sets
  cards?: Card[] 
}

export default function CardsMenu(props: Props) {

  function downloadJSON(obj, filename) {
    const dataUri = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = filename + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
      }, props.setList.name)
    }
  }

  return (<div className={styles.root}> 
  
  {
    props.setList && <p className={styles.title}>{props.setList?.label}</p>
  }

    {props.type === 'setlist' && props.cards?.length > 0 &&
    <button type='button' onClick={uploadDBonDisk} className={styles.button} >
      <p>Экспортировать набор</p> 
    </button> 
    }
    {
      props.type === 'all' &&
    <button type='button' onClick={uploadDBonDisk} className={styles.button} >
      <p>Экспорт всех наборов</p>
    </button> 
    }
  </div>)
}