import React, { useState } from 'react'

function Counter() {
    const [count,Setcount]=useState(0)
    const increment=()=>{
        Setcount(count+1)
    }
    const decrement=()=>{
        Setcount(count-1)
    }
    const reset=()=>{
        Setcount(0)
    }
  return (
    <div>
        <h1>counterApp</h1>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
