import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'

function Layout() {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Layout