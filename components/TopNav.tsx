import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
export default function TopNav() {

    const openExternal  = () =>  {

    }
  return (
    <div className='h-[60px] py-4 px-4 sticky top-0'>
        <div className='flex justify-between px-2'>
            <h1 className='text-3xl font-semibold cursor-pointer'> <span className='text-4xl font-bold text-purple-800 mr-1'>F</span>renTube</h1> 
            <a href='https://twitter.com/pol_tube ' target="_blank" >
             <AiOutlineTwitter className='cursor-pointer text-purple-800' size={35} />
             </a>
        </div>
    </div>
  )
}
