import styles from './removeButton.module.scss'

interface Props {
  onClick: () => void
}

export default function RemoveButton(props: Props) {

  return (<button className={styles.remove} type='button' onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()
    props.onClick()
  }}>X</button>
)
}