import React from 'react'
import styles from '../style/Form.module.css'

function Form({ input, setInput, todos, setTodos }) {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmitTodo = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: input, completed: false, id: Math.floor(Math.random() * 1000)}
        ])
        setInput("")
    }

    return (
        <form className={styles.formContainer}>
            <input className={styles.formInput} type="text" onChange={handleChange} value={input} />
            <button className={styles.formButton} onClick={handleSubmitTodo}>Add</button>
        </form>
    )
}

export default Form
