import React from 'react'
import { SizeFilter } from './size-filter'

export const SideFilters = () => {
  return (
    <div className=' min-w-[300px]  lg:w-[350px] md:block hidden md:p-3
     p-5'>
        <SizeFilter />
    </div>
  )
}
