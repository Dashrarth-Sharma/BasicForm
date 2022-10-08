import styles from './ListItem.module.css'

const ListItem = props => {
    return (
        <div className={styles.listitem}>
            <span>{props.name} ( {props.age} years old )</span>
        </div>
    )
}

export default ListItem