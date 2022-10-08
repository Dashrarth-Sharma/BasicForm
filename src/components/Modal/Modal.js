import styles from './Modal.module.css'

const Modal = props => {
    return(
        <div className={styles.modal}>
            <div className={styles.modalHead}>Invalid input</div>
            <div className={styles.msg}>Enter something in the field.</div>
            <div className={styles.btn}>
                <button>Okay</button>
            </div>
        </div>
    )
}

export default Modal