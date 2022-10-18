import React from 'react'
import { LeftSideBar } from '../left_side_bar/LeftSideBar';
import { RightSideBar } from '../right_side_bar/RightSideBar';
import { Middle } from '../middle/Middle';

export const Main = () => {
  return (
    <div className= 'main flex flex__gap__3'>
         <LeftSideBar />
         <Middle />
         <RightSideBar />
    </div>
  )
}
