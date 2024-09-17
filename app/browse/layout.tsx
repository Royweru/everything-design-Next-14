import React from 'react'
import { SideFilters } from './_components/side-filters'

const BrowseLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' w-full min-h-screen flex '>
        <SideFilters />
          {children}
    </div>
  )
}

export default BrowseLayout