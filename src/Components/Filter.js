
import ClearBtn from './ClearBtn'
import FilterBtn from './FilterBtn'
import {useState, useEffect} from "react"

function Filter({todos, onChange}) {
    const [list, setList]= useState(todos)
    useEffect(() => {
        setList(todos)
    }, [todos])

function handleChange(filterParam) {
    onChange(filterParam)
}

    return (
    <footer className="footer">
        <span className="todo-count">
          <strong>{list.filter(t=>!t.checked).length}</strong> items left
            </span>
            <ul className="filters">
                <li>
                    <FilterBtn selected="selected" name="All" onChange={handleChange}/>
                </li>
                <li>
                    <FilterBtn name="Active" onChange={handleChange}/>
                </li>
                <li>
                    <FilterBtn name="Completed" onChange={handleChange}/>
                </li>
            </ul>

       <ClearBtn/>
    </footer>
    )
}

export default Filter
