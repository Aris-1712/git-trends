import React, { useEffect, useState } from 'react'
import { Router,Route,Switch,useLocation,withRouter } from 'react-router-dom'
import ButtonList from '../../Components/ButtonList'
import DropDown from '../../Components/Dropdown'
import DevRepos from '../DevRepos'
import DevRep from '../DevRepos/DevRep'
import Repositories from '../Repositories'
import './RepoHolder.css'
const RepoHolder=(props)=>{
    const location=useLocation()

    useEffect(()=>{
        if(location.pathname==='/' || location.pathname==='/Repo'){
            setActive(1)
        }else{
            setActive(2)
        }
    },[props])

    const [active,setActive]=useState(1)

    let repoTypes=[{id:1,label:'Repositories'},{id:2,label:'Developers'}]

    return(
        <div className="repoHolder">
            <div className="holderHeader">
                    <ButtonList path={location.pathname} onClick={(id)=>{
                        if(id===1){
                            props.history.push('/Repo')
                        }else{
                            props.history.push('/Devs')
                        }
                    }} active={active} list={repoTypes}></ButtonList>
                    <div className='dropDownHolder'>
                    <DropDown label={"Spoken Language: Any"}></DropDown>
                    <DropDown label={"Language: Any"}></DropDown>
                    <DropDown label={"Date range: Any"}></DropDown>
                    </div>
            </div>
            <Switch>
            <Route exact path='/' component={Repositories}></Route>
            <Route path='/Repo' component={Repositories}></Route>
            <Route path='/Devs' component={DevRepos}></Route>
            </Switch>
        </div>
    )

}


export default withRouter(RepoHolder)