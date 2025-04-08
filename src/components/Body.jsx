import React from 'react'
import SideBar from './Sidebar.jsx'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body