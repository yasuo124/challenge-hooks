import React, { useState } from 'react'
import Add from './Add'
import Card from './Card'
import Edit from './Edit'

const List = () => {
    const [todoList,setTodoList]=useState([
        {desc:"todo task1",id:Math.random(),isDone:false},
        {desc:"todo task2",id:Math.random(),isDone:false},
        {desc:"todo task3",id:Math.random(),isDone:false},
    ])

    const getAdd =(newTask)=>{
        setTodoList([...todoList,{desc:newTask,id:Math.random(),isDone:false}])
    }
    const getRemove =(taskId)=>{
        setTodoList(todoList.filter(task=>task.id != taskId))
    }
    const getEdit =(newTask)=>{
        console.log(newTask)
        setTodoList(todoList.map(task=>task.id == newTask.id ? newTask: task))
    }


  return (
    <div className="listbox">
        
        <div className="header">
            <h1>Todo List</h1>
            <Add getAdd={getAdd}/>
        </div>
        <div className="todolist">
            <h3>List of tasks</h3>
            {todoList.map(el=>
            <Card key={el.id} task={el} getRemove={getRemove} getEdit={getEdit}/>
            )
            }
        </div>
    </div>
  )
}

export default List