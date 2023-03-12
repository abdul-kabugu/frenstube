import React from 'react'
import { toast } from 'react-toastify/dist/core'
import { TypeAnimation } from 'react-type-animation'
import TopNav from './TopNav'
import WaitList from './WaitList'

export default function Hero() {
  return (
    <div>
      <TopNav  />
    <div className='h-screen  flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-4 items-center justify-center '>
        <h1 className='sm:text-3xl text-3xl lg:text-5xl font-semibold '>Welcome To FrenTube</h1>
        <div>
       <TypeAnimation   
  sequence={[
    "Own Your Data",
    1000,
    "Build Your Audience",
    1000,
    "Monitize  Your content",
    1000,
    "Share Freely on a Decentralized Platform."
  ]}

  repeat={Infinity}
  wrapper="h1"
  className='text-2xl lg:text-4xl font-semibold'

/>
</div>


</div>

<div className='mt-10  sm:w-[450px] flex items-center justify-center '>
    <WaitList    />
  </div>
    
    </div>
    </div>
  )
}
