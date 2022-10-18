import React,{useContext, useEffect} from 'react'
import '../nav/nav.css'
import sagni2 from '../../asset/images/sagni2.jpg' 
import {MdFeedback} from 'react-icons/md'
import {MdSettings} from 'react-icons/md'
import {MdHelp} from 'react-icons/md'
import {MdModeNight} from 'react-icons/md'
import {MdLogout} from 'react-icons/md'
import {FaAngleRight} from 'react-icons/fa'
import FacebookContext from '../../context/FacebookContext'


   const DropDown = () => {

  let className = ''
  let className2 = ''
  let className3 = ''
  let className4 = ''
  let className5 = ''

    const {state,dispatch} = useContext(FacebookContext)

    const NigntMode = () => {
        if(state.nightmode){
       document.body.style.backgroundColor = 'black'
        }
       else {
        document.body.style.backgroundColor = '#ccd1d3fa'
        }
    }

    const handleNightMode = () => {
        dispatch({type: 'NIGHT_MODE',state})
        
    }
    useEffect( () => {
        NigntMode() 
       },[state.nightmode])
   

     {
        className = state.toggle ? 'show__dropdown' : 'hide__dropdown' 
        }
     {
        className2 = state.toggle ? '' : 'display' 
        }
     {
        className3 = state.nightmode ? 'toggle__off' : '' 
        }
        {
            className4 = state.nightmode ? ' bg__dark__drop ' : '' 
            }  
            {
            className5 = state.nightmode ? ' color ' : '' 
            } 
       
     
        return (
            <div>
                <div className=   {className + className4 + ' drop__down'}>
                <div className= {className2 + ' inside__drop__down'}>
                    <div className='flex justify__between align__center border__bottom__2'>
                <div className='flex align__center'>
                    <img src={sagni2}  className = 'profile__img__drop cursor__pointer margin__15' alt = 'profile__img'/>
                    <div className='text'>
                        <p className='font__small'>John Nicholas</p>
                        <p className='link__color'>See your profile</p>
                    </div>
                </div>

                <div className='toggle cursor__pointer' onClick={handleNightMode}>
                    <div className= {className3 + ' inside__toggle'}></div>
                </div>
                </div>

                <div className='flex align__center border__bottom__1'>
                    <div className = 'profile__img__drop cursor__pointer margin__15 background'>
                    <MdFeedback className='feedback__icon'/>
                    </div>
                    <div className='text'>
                        <p className='font__small'>Give Feedback</p>
                        <p className='link__color'>Help us to improve the new design</p>
                    </div>
                </div>

                <div className='flex justify__between align__center'>
                <div className='flex align__center'>
                    <div className = 'profile__img__drop cursor__pointer  background  margin__L__15 m__top__1'>
                    <MdSettings className='feedback__icon'/>
                    </div>
                    <div className='text'>
                        <p className='font__small'>Setting & Privacy</p>
                    </div>
                </div>
                <FaAngleRight className='angle__icon cursor__pointer' />
                </div>
            <div className='flex justify__between align__center'>
                <div className='flex align__center'>
                    <div className = 'profile__img__drop cursor__pointer  background  margin__L__15 m__top__1'>
                    <MdHelp className='feedback__icon'/>
                    </div>
                    <div className='text'>
                        <p className='font__small'>Help & Support</p>
                    </div>
                </div>
                <FaAngleRight className='angle__icon cursor__pointer' />
                </div>

                <div className='flex justify__between align__center'>
                <div className='flex align__center'>
                    <div className = 'profile__img__drop cursor__pointer  background  margin__L__15 m__top__1'>
                    <MdModeNight className='feedback__icon night__mode'/>
                    </div>
                    <div className='text'>
                        <p className='font__small'>Display & Accessibility</p>
                    </div>
                    </div>
                    <FaAngleRight className='angle__icon cursor__pointer' />
                </div>
                <div className='flex justify__between align__center'>
                <div className='flex align__center p__bottom__2'>
                    <div className = 'profile__img__drop cursor__pointer  background  margin__L__15 m__top__1'>
                    <MdLogout className='feedback__icon'/>
                    </div>
                    <div className='text flex align__center'>
                        <p className='font__small'>Logout</p>
                    </div>
                </div>
                <FaAngleRight className='angle__icon cursor__pointer' />
                   </div>
                </div>
            </div>
        </div>
        )
   }

export default DropDown
