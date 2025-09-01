'use client'
import { useState } from 'react'
import { Card } from '../../../../components/database/db'
import styles from './card.module.scss'
import classNames from 'classnames'

interface Props extends Card {}

export default function CardComponent(props: Props) {
  const [active, setActive] = useState(false)

  return (<div className={classNames(styles.root, active && styles.root_active)} onClick={() => setActive(!active)}> 
    <div className={styles.front}>
      <p>{props.faceLang}</p>
      <p>{props.face}</p>
    </div>
    <div className={styles.back}>
      <p>{props.backLang}</p>
      <p>{props.back}</p>
    </div>
  </div>)
}