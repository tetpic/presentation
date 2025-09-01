import styles from './menu.module.scss'

interface Props {
}

export default function CardsMenu(props: Props) {

  return (<div className={styles.root}> 
    <p>добавить карточку</p>
    <p>добавить набор</p>
    <p>мои наборы</p>
  </div>)
}