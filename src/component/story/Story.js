import React,{useContext} from 'react'
import './story.css'
import story from '../../asset/images/story4.jpg'
import sagni2 from '../../asset/images/sagni2.jpg'
import FacebookContext from '../../context/FacebookContext'

export const Story = () => {

  const {state,dispatch} = useContext(FacebookContext)

  let className = ''
    {
    className = state.nightmode ? ' text__color ' : '' 
    }  
    
  return (
    <div className = ' story grid grid__col__5 grid__col__gap__1'>
      <div className='img__wrapper'>
          <img src={story} className = 'story__img border__rad__8 shadow__normal cursor__pointer' alt='story image' />
          <img src = {sagni2} className = 'story__profile cursor__pointer' alt = 'profile image'/>
          <p className = {className + 'story__name font__subheading'}>Alison</p>
        </div>
        <div className='img__wrapper'>
          <img src={story} className = 'story__img border__rad__8 shadow__normal cursor__pointer' alt='story image' />
          <img src = {sagni2} className = 'story__profile cursor__pointer' alt = 'profile image'/>
          <p className = {className + 'story__name font__subheading'}>Alison</p>
        </div>
        <div className='img__wrapper'>
          <img src={story} className = 'story__img border__rad__8 shadow__normal cursor__pointer' alt='story image' />
          <img src = {sagni2} className = 'story__profile cursor__pointer'  alt = 'profile image'/>
          <p className = {className + 'story__name font__subheading'}>Alison</p>
        </div>
        <div className='img__wrapper'>
          <img src={story} className = 'story__img border__rad__8 shadow__normal cursor__pointer' alt='story image' />
          <img src = {sagni2} className = 'story__profile cursor__pointer'  alt = 'profile image'/>
          <p className = {className + 'story__name font__subheading'}>Alison</p>
        </div>
        <div className='img__wrapper'>
          <img src={story} className = 'story__img border__rad__8 shadow__normal cursor__pointer' alt='story image' />
          <img src = {sagni2} className = 'story__profile cursor__pointer'  alt = 'profile image'/>
          <p className = {className + 'story__name font__subheading'}>Alison</p>
        </div>
    </div>
  ) 
}
