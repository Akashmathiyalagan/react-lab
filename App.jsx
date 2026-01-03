import { useState } from 'react'

function App() {
  const [task, setTask] = useState([]);
  const [text,setText]=useState("");
  const addTask=()=>{
    setTask([...task,{name:text,completed:false}]);
    setText("");
  }
  const deleteTask=(index)=>{
    setTask(task.filter((_,i)=>i!==index));
  }
  return (
    <div>
    <h1>TODO-List</h1>
    <input 
    value={text} 
    placeholder='Enter the Task' 
    onChange={(e)=>setText(e.target.value)} />
    <button onClick={addTask}>Add</button>
    <ul>
      {task.map((task,index)=>(
        <li key={index}>
          <input type="checkbox" checked={task.completed} />
          <span>{task.name}</span>
          <button onClick={()=>deleteTask(index)}>delete</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default App
