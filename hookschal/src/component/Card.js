import React, { useEffect, useState } from 'react'
import EditModal from './Edit';

const Card = (props) => {
  const [editInput, setEditInput] = useState(props.task.desc)
  const [checked, setChecked] = useState(false);
  useEffect(()=>{ 
    props.getEdit({id:props.task.id, desc:editInput})
  },[editInput])
  const handleCheck =()=>{
    setChecked(!checked)
    console.log(checked)
  }


  const removeTask = () =>{
    props.getRemove(props.task.id)
  }

  return (
    <div className="cardbox">
      <input className="completed" type="checkbox" onChange={handleCheck}/>
      <label style={{textDecoration: checked ? 'line-through' :'none'}} >{props.task.desc}</label>
      <div className="tools">
        <EditModal setEditInput={setEditInput}/>
        <button className="delete" onClick={removeTask}>REMOVE</button>
      </div> 
    </div>
  )
}

export default Card