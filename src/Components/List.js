import React from 'react'

import Task from "./Task"
import { useState, useEffect } from "react"

function List({ todos, onChange }) {
    const [list, setList] = useState(todos)

    function handleSetList(id, isChecked) {
        if (isChecked!=undefined)
            changedChecked(id, isChecked)
        else
            removeList(id)
    }

    function removeList(id) {
        list.splice(id, 1)
        setList(list);
        onChange(list);
    }

    function changedChecked(id, isChecked) {
        list[id].checked = isChecked;
        onChange(list);
    }

    useEffect(() => {
        setList(todos)
    }, [todos])

    return (
        <ul class="todo-list">
            {list.map((task, i) =>
                <Task key={i} id={i} checked={task.checked} task={task.name} onChange={handleSetList} />
            )}
        </ul>

    )
}

export default List
