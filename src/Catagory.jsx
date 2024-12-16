import React from 'react'
import data from './Shared/data'

function Catagory() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse by Type</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 '>
            {data.carCategories.map((catagory, index) => (
                <div className=' border rounded-md p-3 items-center flex flex-col cursor-pointer hover:shadow-2xl'>
                    <img src={catagory.icon} alt="no img" height={40} width={40} className=' hover:scale-125 transition-all'/>
                    <h2 className=' hover:text-red-600 transition-all'>{catagory.name}</h2>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Catagory