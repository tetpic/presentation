'use client'
import { useState } from 'react'
import { Card } from '../../../../components/database/db'
import styles from './card.module.scss'
import classNames from 'classnames'

interface Props extends Card {
  reverseMode?: boolean
}

export default function CardComponent(props: Props) {
  const [active, setActive] = useState(props.reverseMode)

  return (<div className={styles.root} onClick={() => setActive(!active)}> 
    <div className={classNames(styles.cardWrapper, active && styles.cardWrapper_active)}>
      <div className={styles.front}>
        <p className={styles.setName}>{props.setLabel}</p>
        <p className={styles.lang}><span>{props.faceLang}</span></p>
        <p className={styles.text}>{props.face}</p>
      </div>
      <div className={styles.back}>
        <p className={styles.setName}>{props.setLabel}</p>
        <p className={styles.lang}><span>{props.backLang}</span></p>
        <p className={styles.text}>{props.back}</p>
      </div>
    </div>
  </div>)
}