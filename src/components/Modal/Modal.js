import styles from './Modal.module.css'

const Modal = props => {
    return (
        <div className={styles.backdrop} onClick={props.onCancel}>
            <div className={styles.modal}>
                <div className={styles.modalHead}>Invalid input</div>
                <div className={styles.msg}>{props.message}</div>
                <div className={styles.btn}>
                    <button onClick={props.onCancel}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Modal