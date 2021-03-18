import React from 'react'
import { FiTrash2, FiCheck } from 'react-icons/fi'
import styles from '../style/Todo.module.css'

function Todo({ text, todo, todos, setTodos }) {

    const handleDelete = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const handleComplete = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className={styles.todoContainer}>
            <li className={`${todo.completed ? styles.liCompleted : ""} `}>
                {text}
                <div className={styles.todoButton} >
                    <button  onClick={handleComplete} >
                        <FiCheck className={styles.todoButtonComplete} />
                    </button>
                    <button  onClick={handleDelete} >
                        <FiTrash2 className={styles.todoButtonDelete} />
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Todo
