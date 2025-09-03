import Link from 'next/link'
import styles from './layout.module.scss'

interface Props {
  children: React.ReactNode
}

export default function CardsRootLayout(props: Props) {

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