import React from 'react'
import { useState } from 'react'
import './App.css';

const Counter = () => {
    const [count,setcount] = useState(0)

    const increment = () => setcount(count+1)
    const decrement = () => setcount(count-1)
  return (
    
        <div className="container">
            <h1 style={{color : "rgba(255, 0, 0, 0.5)", fontWeight: 'bold' }}>🐦‍🔥 The Count Is 🐦‍🔥</h1>
            <div>
                <h1 className="number">{count}</h1>
            </div>
            <div className="btns_container">
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                
            </div>

        </div>
    
  )
}

export default Counter