import { ProductCard } from '@/components/product-card'
import { brandedTshirts } from '@/data/products'
import React from 'react'

const BrowsePage = () => {
  return (
    <div className=' w-full px-2 relative py-4'>
        <div className=' grid grid-cols-2  md:grid-cols-6 lg:grid-cols-9 gap-3 lg:gap-1'>
            {brandedTshirts.map((tshirt)=>(
                <ProductCard
                  key={tshirt.id}
                  data={tshirt}
                />
            ))}
        </div>
    </div>
  )
}

export default BrowsePage