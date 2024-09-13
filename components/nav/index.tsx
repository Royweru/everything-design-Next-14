import React from 'react'
import { NavHeader } from './nav-header'
import { MainNav } from './main-nav'

export const Navbar = () => {
  return (
    <div className='  w-full relative'>
       <NavHeader />
       <MainNav /> 
    </div>
  )
}
