import React from 'react'
import { useState } from 'react'
import '../todo_list/todo.css'

const Todos = () => {
    const [todos , setTodos] = useState([])
    const [input,setInput] = useState('')

    const handlesubmit = () => {
        setTodos((todos) => {
          return  todos.concat({text : input , id : Math.floor(Math.random() * 10)})
        })
        setInput("")
    }

    const removeTodo = (id) =>{
        setTodos((todos) => todos.filter((t) => t.id != id))
    }


  return (
    <div className='dada'>
        <input type="text" placeholder='New Todo' value={input} onChange={(e) => setInput(e.target.value)} />

        <button onClick={handlesubmit}>submit</button>

        <ul className="todo-list">
            {todos.map(({text,id}) => (
                <li className="todo" key={id}>
                    {/* <img src="https://i.pinimg.com/originals/23/4e/c9/234ec96cefc3a5ef151181a52bd6a56c.jpg" alt="pokeball-icon" className='pokeball-icon' /> */}
                    <span>{text}</span>
                    <button className="close" onClick={() => removeTodo(id)}>❌</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todos