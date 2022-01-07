import React, { useEffect,useState } from 'react'
import DevRep from './DevRep'
import {devData} from '../../Global/Data'


const DevRepos = (props) => {
    const [devList,setDevList]=useState([])
    useEffect(()=>{
        setDevList(devData)
    },[])
    return(
        <DevRep list={devList}></DevRep>
    )
}


export default DevRepos