import React, { useContext } from 'react'
import './upload.css'
import sagni from '../../asset/images/sagni2.jpg'
import {IoIosVideocam} from 'react-icons/io'
import {MdPlayArrow} from 'react-icons/md'
import {FaAngleDown} from 'react-icons/fa'
import {MdVideocam} from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaFace } from 'react-icons/fa'
import {FaLaugh} from 'react-icons/fa'
import FacebookContext from '../../context/FacebookContext'

export const Upload = () => {

  let className = ''
  let className2 = ''
  let className3 = ''
  let className4 = ''

  const {state,dispatch} = useContext(FacebookContext)

  {
    className = state.nightmode ? 'bg__dark' : 'bg__light' 
    }  
    {
    className2 = state.nightmode ? ' color ' : '' 
    }  


  return (
    <div className = { className + className2 + ' upload border__rad__8 shadow__normal flex'}>
         <img src={sagni} className = 'upload__profile cursor__pointer' alt = 'profile image' />
         <div className='container__main flex flex__col'>
        <div className='container__upload'>
           <h1 className='font__small'>John Nicholson</h1>
           <p className='font__tinny font__weight__700'>
             Public<span>
             <MdPlayArrow className='arrow cursor__pointer' />
             </span>
            </p>
            <input className = {className + className2 + ' post__input font__small'} placeholder='What is on your mind, John?' />
        </div>
        <div className='upload__icons flex justify__start align__center'>
            <div className='flex flex__gap__2'>
              <div className='camera flex flex__gap__1 align__center'> 
               <MdVideocam className='icon' color='rgb(226, 31, 31)' />
                  <FaPlus className='plus cursor__pointer' color='#fff' />
                  <p className='font__15 font__weight__400'>Live Video</p>
               </div>
               <div className='flex flex__gap__1 align__center'>
                <FaCamera className='icon2 cursor__pointer' color='rgb(12, 161, 12)' />
                <p className='font__15 font__weight__400'>Photo/Video</p>
                </div>
                <div className='flex flex__gap__1 align__center'>
                <FaLaugh color='rgb(226, 180, 29)' className='icon2 cursor__pointer'  />
                <p className='font__15 font__weight__400'>Feeling/Activity</p>
                </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}
