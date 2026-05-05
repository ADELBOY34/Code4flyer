import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "./TypeScriptPage.css"
import { Outlet } from 'react-router-dom'

function TypeScriptPage() {
  return (
    <>
    <div  className="typescript-layout">
      <SideBar/>
      <Outlet />
    </div>
     
     
    
   
    </>
  )
}

export default TypeScriptPage
