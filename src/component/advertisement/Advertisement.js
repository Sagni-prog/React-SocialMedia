import React from 'react'
import './ads.css'
import post2 from '../../asset/images/post2.jpg'

 const Advertisement = () => {
  return (
    <div className='ads flex flex__col'>
      <div className='flex justify__between m__bottom__2'>
        <h3 className='font__small'>Advertisement</h3>
        <p className='font__15 link__color cursor__pointer'>Close</p>
      </div>
      <img src= {post2} className = 'ads__image border__rad__8 cursor__pointer' alt = 'advertisement image'/> 
    </div>
  )
}

export default Advertisement
