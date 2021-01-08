import React from 'react'
import {useState} from "react"

function Task(props) {
    const [checked, setChecked] = useState(props.checked ? true : false)
    function handleInputChange(e) {
        setChecked(e.target.checked);
        props.onChange(props.id, e.target.checked)
    }
    function removeId(key) {
        props.onChange(key)
    }
    return (
        <li className={checked ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" onChange={handleInputChange} checked={checked} />
                <label>{props.task}</label>
                <button className="destroy" onClick={(e)=>removeId(props.id)}></button>
            </div>
        </li>
    )
}

export default Task
