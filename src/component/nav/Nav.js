import React, { useContext } from 'react'
import './nav.css'
import {FaBell} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {MdVideocam} from 'react-icons/md'
import {MdSearch} from 'react-icons/md'
import sagni2 from '../../asset/images/sagni2.jpg' 
import DropDown from '../dropdown/DropDown'
import FacebookContext from '../../context/FacebookContext'



export const Nav = () => {
    const {state,dispatch} = useContext(FacebookContext)

    const handleDropDown = () => {
        dispatch({type: 'OPEN_TOGGLE',state})
        // console.log(state.toggle)
    }
    

  return (

    <nav className='nav'>
        <div className='container__nav flex justify__between align__center'>
           <div className='left__link'>
              <div className='logo cursor__pointer'>
                 <h1>
                     <span>L</span>inker
                 </h1>
              </div>
              <ul className='nav_link'>
                  <li className='link cursor__pointer'>
                      <FaBell color = '#fff'/>
                  </li>
                  <li className='link cursor__pointer'>
                      <MdEmail color='#fff' />
                  </li>
                  <li className='link cursor__pointer' >
                      <MdVideocam color='#fff' />
                  </li>
              </ul>
           </div>
           <div className='right__link flex align__center'>
              <div className='field'>
               <input className='input__field' placeholder='Search'></input>
                   <MdSearch className='search__icon cursor__pointer'/>
               </div> 
               <div  className = 'profile__img cursor__pointer'>
               <img src={sagni2} onClick = {handleDropDown} alt = 'profile__img'/>
               </div>
           </div>
        </div>

        <DropDown />
         </nav>
  )
}
