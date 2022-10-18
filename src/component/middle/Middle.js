import React from 'react'
import { Story } from '../story/Story'
import { Upload } from '../upload/Upload'
import { Post } from '../post/Post'
import './middle.css'

export const Middle = () => {
  return (
    <div className='middle flex flex__col flex__gap__3'>
      <Story />
      <Upload />
      <Post />
    </div>
  )
}
