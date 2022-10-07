import { useState } from 'react'
import styles from './Form.module.css'

const Form = props => {

    const [input, setInput] = useState({ name: '', age: '' })

    const onChangeInput = e => {
        const name = e.target.name
        const value = e.target.value
        setInput(s => (
            {
                ...s, [name]: value,
            }
        ))
        console.log(input)
    }


    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <form className={styles.form}>
            <div className={styles.formControl}>
                <label>Username</label>
                <input type="text" placeholder="Name..." name='name' onChange={onChangeInput} />
            </div>
            <div className={styles.formControl}>
                <label>Age (Years)</label>
                <input type="text" placeholder="Age..." name='age' onChange={onChangeInput} />
            </div>
            <div className={styles.formControl}>
                <button type='submit' onClick={onSubmit}>Add User</button>
            </div>
        </form>
    )
}

export default Form