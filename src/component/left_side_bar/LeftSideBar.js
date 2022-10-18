import React,{useContext} from 'react'
import './leftsidebar.css'
import { Mis } from '../mis/Mis'
import { Shortcut } from '../shortcuts/Shortcut'
import FacebookContext from '../../context/FacebookContext'


export const LeftSideBar = () => {

  const {state,dispatch} = useContext(FacebookContext)

  let className = ''
  let className2 = ''
  let className3 = ''
  let className4 = ''

    {
    className = state.nightmode ? 'bg__dark' : 'bg__light' 
    }  
    {
    className2 = state.nightmode ? ' color ' : '' 
    } 
    {
    className3 = state.nightmode ? ' color__dark ' : '' 
    } 

  return (
    <div className = {className2 + ' left flex flex__col flex__gap__3'}>
      <div className='fixed'>
        <Mis />
        <Shortcut />
        </div>
    </div>
  )
}
