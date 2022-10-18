import React,{useContext} from 'react'
import './event.css'
import {MdLocationPin} from 'react-icons/md'
import FacebookContext from '../../context/FacebookContext'
import {Data}  from '../../data/Data'
 

 const Event = () => {

     console.log(Data[0].name)

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
    <div className='event margin'>
      <div className='flex justify__between m__top__mid m__bottom__2'>
        <h3 className='font__small'>Events</h3>
        <p className='font__15 link__color cursor__pointer'>See All</p>
      </div>
      <div className='flex flex__gap__2 align__center m__bottom__1'>
        <div className='box'>
          <div className = {className3 + ' top__box flex align__center justify__center'}>
              <h3 className='font__subheading font__weight__600'>18</h3>
          </div>
          <div className='bottom__box flex align__center justify__center'>
              <p className='font__15'>
                March
              </p>
          </div>
        </div>
        <div className='text flex flex__col flex__gap'>
            <h3 className='font__small font__weight__700'>Social Media</h3>
            <p className='flex align__center'>
               <span><MdLocationPin className='location__icon'/></span>
               Willson Tech Park
               </p>
               <p className='link__color cursor__pointer'>More info</p>
        </div>
      </div>
      <div className='flex flex__gap__2 align__center'>
        <div className='box'>
          <div className = {className3 + 'top__box flex align__center justify__center'}>
              <h3 className='font__subheading font__weight__600'>18</h3>
          </div>
          <div className='bottom__box flex align__center justify__center'>
              <p className='font__15'>
                March
              </p>
          </div>
        </div>
        <div className='text flex flex__col flex__gap'>
            <h3 className='font__small font__weight__700'>Social Media</h3>
            <p className='flex align__center'>
               <span><MdLocationPin className='location__icon'/></span>
               Willson Tech Park
               </p>
               <p className='link__color cursor__pointer'>More info</p>
        </div>
      </div>
    </div>
  )
}

export default Event
