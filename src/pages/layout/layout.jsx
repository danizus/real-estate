import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../../components/navbar/Navbar"
import "./layout.scss"
 
export default function Layout() {
  return (
     <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}
