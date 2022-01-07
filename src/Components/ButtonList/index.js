import React from 'react'
import './ButtonList.css'

const ButtonList = (props) =>{
    let {list,active}=props
    return(
        <div className='ButtonList'>
            {
                list.map((ele,ind)=>{
                    return(
                        <div key={ind} onClick={()=>{props.onClick(ele.id)}} className={ele.id===active?'btn activeButtonList':'btn'}>{ele.label}</div>
                    )
                })
            }
        </div>
    )
}

export default ButtonList