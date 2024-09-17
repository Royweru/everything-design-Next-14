import React from 'react'
const Sizes = [
    'xl','lg','Md','Sm','Xs'
]
export const SizeFilter = () => {

  return (
    <div className=' w-full border border-black shadow-small p-2 hover:cursor-pointer'>
        <div className=' w-full relative grid grid-cols-2 gap-3'>
            {Sizes.map((size)=>(
                <div key={size} className=' font-bold text-2xl
                 col-span-1 flex items-center justify-center  p-5 bg-neutral-white'>
                   <p className=' capitalize font-mono text-text-primary tracking-wide'>
                     {size}
                   </p>
                </div>
            ))}
        </div>
    </div>
  )
}
