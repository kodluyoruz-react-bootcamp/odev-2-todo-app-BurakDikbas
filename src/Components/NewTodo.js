import React from 'react'
import { useState } from "react"


function NewTodo(props) {
    const [task, setTask] = useState("");
    
    function onSubmit(e) {
        e.preventDefault();
        props.onChange(e.target[0].value);
    }


    return (
        <form onSubmit={(e)=>onSubmit(e)}>
            <input className="new-todo"
                placeholder={props.placeholder}
                autoFocus
                onChange={(e)=> setTask(e.target.value)}
                value={task} />
        </form>
    )
}

export default NewTodo
