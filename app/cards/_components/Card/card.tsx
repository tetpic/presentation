import styles from './card.module.scss'

interface Props {
}

export default function Card(props: Props) {

  return (<div className={styles.root}> 
    карточка
  </div>)
}