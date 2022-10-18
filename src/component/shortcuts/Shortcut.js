import React from 'react'
import './shortcut.css'
import err from '../../asset/images/err.png'

export const Shortcut = () => {
  return (
      
    <div className='flex flex__col flex__gap__2 m__top__2'>
          <p className='font__small'>Shortcut</p>
        <div className='flex align__center flex__gap__2'>
          <img src= {err} className = 'img__squere_4 border__7' alt = 'code image' />
           <p className='font__small'>Web Developers</p>
        </div>
        <div className='flex align__center flex__gap__2'>
          <img src= {err} className = 'img__squere_4 border__7' alt = 'code image' />
           <p className='font__small'>Web Developers</p>
        </div>
         <div className='flex align__center flex__gap__2'>
          <img src= {err} className = 'img__squere_4 border__7' alt = 'code image' />
           <p className='font__small'>Web Developers</p>
        </div>
         <div className='flex align__center flex__gap__2'>
          <img src= {err} className = 'img__squere_4 border__7' alt = 'code image' />
           <p className='font__small'>Web Developers</p>
        </div>
    </div>
  )
}
