import styles from './layout.module.scss'

interface Props {
  children: React.ReactNode
}

export default function CardsLayout(props: Props) {

  return (<div className={styles.root}> 
    {props.children}
  </div>)
}