import React from 'react'
import './Dropdown.css'
import {BsChevronDown} from 'react-icons/bs'
const DropDown = (props) =>{
    let {label} = props
    return(
        <div className='dropdown'>
        <p>{label}</p>
        <BsChevronDown size={12} color={"#ffff"} style={{padding:"1px 10px"}}></BsChevronDown>
        </div>
    )
}

export default DropDown