import React,{useContext} from 'react'
import './rightsidebar.css'
import Event from '../events/Event'
import Advertisement from '../advertisement/Advertisement'
import Chat from '../chat/Chat'
import FacebookContext from '../../context/FacebookContext'


export const RightSideBar = () => {

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

  return (
    <div className = { className + className2 + ' right flex flex__col flex__gap__3 '}>
       <div className = { className + className2 + ' fixed__right border__rad__8'}>
      <Event />
      <Advertisement />
       <Chat />
      </div>
  </div>
  )
}
