import React, {useState} from 'react'
import styles from './style/App.module.css'
import Form from './components/Form';
import List from './components/List';

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className={styles.appContainer}>
      <h1><i>O que tem para fazer hoje!</i></h1>
      <Form todos={todos} setTodos={setTodos} setInput={setInput} input={input} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
