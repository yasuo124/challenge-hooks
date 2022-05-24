import React, { useState } from 'react'

const Add = (props) => {

    const [newTask, setNewTask]=useState("")

    const addTask =()=>{
        props.getAdd(newTask)
    }


  return (
    <div className="addbox">
        <input placeholder="New task here..." type onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default Add