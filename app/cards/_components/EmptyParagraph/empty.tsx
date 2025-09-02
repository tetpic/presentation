import styles from './empty.module.scss'

interface Props {
  text: string
}

export default function EmptyParagraph (props: Props) {

  return (<p className={styles.empty}>{props.text}</p>)
}