import React from 'react'
import './mis.css'
import {FaNewspaper} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {MdShoppingCart} from 'react-icons/md'
import {MdOutlineYoutubeSearchedFor} from 'react-icons/md'
import {MdGroup} from 'react-icons/md'

export const Mis = () => { 
  return (
    <div className='flex flex__col mis flex__gap__2'>
        <div className='flex align__center flex__gap__2'>
           <FaNewspaper className='side__icons'  color='#0a53f1'/>
           <p className='font__small'>Latest News</p>
        </div>
        <div className='flex align__center flex__gap__2'>
           <FaUserFriends className='side__icons' color='#0a53f1'/>
           <p className='font__small'>Friends</p>
        </div>
        <div className='flex align__center flex__gap__2'>
           <MdGroup className='side__icons'  color='#0a53f1'/>
           
           <p className='font__small'>Groups</p>
        </div>
        <div className='flex align__center flex__gap__2'>
           <MdShoppingCart className='side__icons' color='#0a53f1'/>
           <p className='font__small'>Market Place</p>
        </div>
        <div className='flex align__center flex__gap__2'>
           <MdOutlineYoutubeSearchedFor className='side__icons' color='#0a53f1'/>
           <p className='font__small'>Watch</p>
        </div>
        <div className='flex align__center flex__gap__2'>
           <p className='font__small link__color m__bottom__1 cursor__pointer'>See more</p>
        </div>

    </div>
  )
}
