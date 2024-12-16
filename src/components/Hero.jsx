import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className=' flex flex-col items-center p-10 py-20 
            gap-6 h-[650px] w-full bg-[#eef0fc]'>
            <h2 className=' text-lg'>Find Car For Sale and rent near you</h2>
            <h2 className='text-[60px] font-bold'>Find Your Dream Car Here</h2>

            <Search/>
            <img src="/thar.png" className='mt-10' alt="sorry baby" />
        </div>
    </div>
  )
}

export default Hero