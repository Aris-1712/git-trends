import React from 'react'
import {AiOutlineStar,AiOutlineHeart} from 'react-icons/ai'
import './ImageButton.css'

const Imagebuttons = (props) =>{

    return(
        <div className='imageButton'>
            {props.star?<AiOutlineStar color="#ffff"></AiOutlineStar>:(props.heart?<AiOutlineHeart color="#F85084"></AiOutlineHeart>:null)}
            <p>{props.label}</p>
        </div>
)
}


export default Imagebuttons