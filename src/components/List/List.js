import styles from './List.module.css'

import ListItem from './ListItem'

const List = props => {
    return (
        <div className={styles.list}>
            {
                props.data.map(item => (
                    <ListItem name={item.name} age={item.age} key={Math.random() * 100} />
                ))
            }
        </div>
    )
}

export default List