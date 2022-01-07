import React, { useEffect, useState } from 'react'
import Repository from './Repository'
import  {getRepo} from '../../Global/Calls'
import {reps} from '../../Global/Data'
const Repositories = (props) =>{
    const [repoList,setRepoList]=useState([])
    const getReps = async() => {
        setRepoList(reps.items)
    }
    useEffect(()=>{
        getReps()
    },[])
    return(
        <Repository list={repoList}></Repository>
    )
}

export default Repositories

