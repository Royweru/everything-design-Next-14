"use client"
import React, { useEffect, useState } from 'react'
import { NavHeader } from './nav-header'
import { MainNav } from './main-nav'

export const Navbar = () => {
const [mounted, setMounted] = useState(false)
useEffect(()=>{
  setMounted(true)
},[])
if(!mounted) return null
  return (
    <div className='  w-full relative'>
       <NavHeader />
       <MainNav /> 
    </div>
  )
}
