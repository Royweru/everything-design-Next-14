import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'

export const ProductCard = ({
    data
}:{
    data:Product
}) => {
  return (
    <div className=' col-span-1 md:col-span-3 cursor-pointer group bg-transparent'>
        <div className=' flex flex-col overflow-hidden gap-y-2 relative w-full'>
            <div className=' w-full h-[200px]'>
             <Image
              fill
              src={data.thumbnail}
              className=' bg-cover bg-center'
              alt={data.name}
              />
            </div>
        </div>
    </div>
  )
}
