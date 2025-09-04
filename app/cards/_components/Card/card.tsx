'use client'
import { useEffect, useState } from 'react'
import { Card, db } from '../../../../components/database/db'
import styles from './card.module.scss'
import classNames from 'classnames'
import { EyeOutlined } from '@ant-design/icons'
import Input from 'antd/es/input/Input'

interface Props extends Card {
  reverseMode?: boolean
  hardMode? : boolean
}

export default function CardComponent(props: Props) {
  const [active, setActive] = useState(props.reverseMode)
  const [inputState, setInputState] = useState('')

  useEffect(()=>{
    setActive(props.reverseMode)
  }, [props.reverseMode])

  const sendDataAndRotate = () => {
    const views = Number(props.statistics?.views || 0) + 1
    db.cards.update(props.id, {statistics: {views: views.toString()}})
    setActive(!active)
  }

  const onClick = () => {
    if(props.hardMode) {
      return
    }
    sendDataAndRotate()
  }

  const checkWord = () => {
    if(!props.hardMode) {
      return
    }
    if(props.reverseMode) {
      if(inputState === props.face ) {
        sendDataAndRotate()      
      }
    }
    if(!props.reverseMode) {
      if(inputState === props.back ) {
        sendDataAndRotate()      
      }
    }
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
        {props.hardMode && !props.reverseMode &&
          <div className={styles.hardModeInput}>
            <Input value={inputState} onChange={(e) => setInputState(e.target.value)} />
            <button onClick={checkWord} className={styles.button}>{'>'}</button>
          </div>
        }
      </div>
      <div className={styles.back}>
        <p className={styles.setName}>{props.setLabel}</p>
        <p className={styles.lang}><span>{props.backLang}</span></p>
        <p className={styles.text}>{props.back}</p>
        {props.statistics?.views &&
          <p className={styles.views}><EyeOutlined /> {props.statistics?.views}</p>
        }
        {props.hardMode && props.reverseMode &&
          <div className={styles.hardModeInput}>
            <Input value={inputState} onChange={(e) => setInputState(e.target.value)} />
            <button onClick={checkWord} className={styles.button}>{'>'}</button>
          </div>
        }
      </div>
    </div>
  </div>)
}