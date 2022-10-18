import React, { useContext } from 'react'
import './post.css'
import sagni from '../../asset/images/sagni2.jpg'
import {IoIosMore} from 'react-icons/io'
import post from '../../asset/images/post.png'
import post2 from '../../asset/images/post2.jpg'
import {FaThumbsUp} from 'react-icons/fa'
import {IoIosThumbsUp} from 'react-icons/io'
import {MdComment} from 'react-icons/md'
import{FaShare} from 'react-icons/fa'
import {MdPlayArrow} from 'react-icons/md'
import FacebookContext from '../../context/FacebookContext'

export const Post = () => {

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

    <div className='flex flex__col flex__gap__1'>

     <div className ={ className2 + className +  ' m__bottom__3 flex flex__col flex__gap__1 border__rad__8 shadow__normal'}>
      <div className='center flex flex__col flex__gap__1 '>
      <div className='top__wrapper flex justify__between m__top__2'>
      <div className='user flex flex__gap__1'>
        <img src={sagni} className = 'post__profile cursor__pointer' alt = 'prodile picture'/>
        <div className='flex flex__col '>
        <p className='font__small font__weight__700 inline__block m__top__small'>John Nicholas</p>
        <p className='font__tinny inline__block'>July 29 2022, 7:30pm</p>
        </div>
       </div>
           <IoIosMore className='see__more cursor__pointer' />
       </div>
       <div className='post__body'>
         <p className='font__small line__height font__weight__400'>
           Hello i am Sagni the software engineer now i am working on react and laravel and i have good experience of web development and UI/UX design
           </p>
       </div>
       <img src= {post2} alt = 'posted image' className = 'post__image border__rad__8 cursor__pointer' />

       <div className='flex justify__between'>
         <div className='flex flex__gap__2'>
          <div className='flex align__center flex__gap__1'>
              <FaThumbsUp className='post__icon cursor__pointer' />
              <p className='font__small'>120</p>
          </div>
          <div className='flex align__center flex__gap__1'>
              <MdComment className='post__icon cursor__pointer' />
              <p className='font__small'>320</p>
          </div>
          <div className='flex align__center flex__gap__1'>
              <FaShare className='post__icon cursor__pointer' />
              <p className='font__small'>12</p>
          </div>
          </div>
          <div className='flex align__center'>
          <img src={sagni} className = 'post__profile__footer m__bottom__1 cursor__pointer' alt = 'prodile picture'/>
          <MdPlayArrow className='arrow__post cursor__pointer' />
          </div>
       </div>
       </div>
    </div>
     <div className = {className2 + className + ' m__bottom__3 flex flex__col flex__gap__1  border__rad__8 shadow__normal'}>
      <div className='center flex flex__col flex__gap__1 '>
      <div className='top__wrapper flex justify__between m__top__2'>
      <div className='user flex flex__gap__1'>
        <img src={sagni} className = 'post__profile cursor__pointer' alt = 'prodile picture'/>
        <div className='flex flex__col '>
        <p className='font__small font__weight__700 inline__block m__top__small'>John Nicholas</p>
        <p className='font__tinny inline__block'>July 29 2022, 7:30pm</p>
        </div>
       </div>
           <IoIosMore className='see__more cursor__pointer' />
       </div>
       <div className='post__body'>
         <p className='font__small line__height font__weight__400'>
           Hello i am Sagni the software engineer now i am working on react and laravel and i have good experience of web development and UI/UX design
           </p>
       </div>
       <img src= {post2} alt = 'posted image' className = 'post__image border__rad__8 cursor__pointer' />

       <div className='flex justify__between'>
         <div className='flex flex__gap__2'>
          <div className='flex align__center flex__gap__1'>
              <FaThumbsUp className='post__icon cursor__pointer' />
              <p className='font__small'>120</p>
          </div>
          <div className='flex align__center flex__gap__1'>
              <MdComment className='post__icon cursor__pointer' />
              <p className='font__small'>320</p>
          </div>
          <div className='flex align__center flex__gap__1'>
              <FaShare className='post__icon cursor__pointer' />
              <p className='font__small'>12</p>
          </div>
          </div>
          <div className='flex align__center'>
          <img src={sagni} className = 'post__profile__footer m__bottom__1 cursor__pointer' alt = 'prodile picture'/>
          <MdPlayArrow className='arrow__post align__center cursor__pointer' />
          </div>
       </div>
       </div>
    </div>

    </div>
  )
}
