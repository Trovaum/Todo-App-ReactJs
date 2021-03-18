import React from 'react'
import styles from '../style/List.module.css'
import Todo from './Todo'

function List({ todos, setTodos }) {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.listItens}>
                {todos.map(todo => (
                    <Todo 
                    todos={todos} 
                    setTodos={setTodos}
                    todo={todo} 
                    key={todo.id} 
                    text={todo.text}/>
                ))}
            </ul>
            
        </div>
    )
}

export default List
