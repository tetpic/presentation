'use client'
import { useEffect, useState } from 'react'
import { Card, db } from '../../../../components/database/db'
import styles from './card.module.scss'
import classNames from 'classnames'
import { EyeOutlined } from '@ant-design/icons'

interface Props extends Card {
  reverseMode?: boolean
}

export default function CardComponent(props: Props) {
  const [active, setActive] = useState(props.reverseMode)

  useEffect(()=>{
    setActive(props.reverseMode)
  }, [props.reverseMode])

  const onClick = () => {
    const views = Number(props.statistics?.views || 0) + 1
    db.cards.update(props.id, {statistics: {views: views.toString()}})
    setActive(!active)
  }

  return (<div className={styles.root} onClick={onClick}> 
    <div className={classNames(styles.cardWrapper, active && styles.cardWrapper_active)}>
      <div className={styles.front}>
        <p className={styles.setName}>{props.setLabel}</p>
        <p className={styles.lang}><span>{props.faceLang}</span></p>
        <p className={styles.text}>{props.face}</p>
        {props.statistics?.views &&
          <p className={styles.views}><EyeOutlined /> {props.statistics?.views}</p>
        }
      </div>
      <div className={styles.back}>
        <p className={styles.setName}>{props.setLabel}</p>
        <p className={styles.lang}><span>{props.backLang}</span></p>
        <p className={styles.text}>{props.back}</p>
        {props.statistics?.views &&
          <p className={styles.views}><EyeOutlined /> {props.statistics?.views}</p>
        }
      </div>
    </div>
  </div>)
}