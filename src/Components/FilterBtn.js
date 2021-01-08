import React from 'react'

function FilterBtn(props) {
    return (
        <a className={props.selected} onClick={()=>props.onChange(props.name)}>{props.name}</a>
    )
}

export default FilterBtn
