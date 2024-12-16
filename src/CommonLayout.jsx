import React from 'react'
import Nav from './componate/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './componate/Footer'

export default function CommonLayout() {
  return (
   <>
   <Nav />
   <Outlet />
   <Footer />
   </>
  )
}
