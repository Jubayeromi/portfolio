import React from 'react'
import StartCollaborationButton from './startCollaborationButton'

const Collab = () => {
  return (
    <div id='journal' className='flex flex-col justify-center items-center pt-[10%] pb-[10%] bg-[#1a1c1a] leading-10 md:leading-normal'>
      <p className='text-[#77a02e] text-[13px] mb-[3%] '>PROJECT INQUIRY</p>
      <h1 className='uppercase md:text-[80px] text-[33px] text-white font-bold mb-0'>Ready to encode</h1>
      <h1 className='uppercase md:text-[80px] text-[33px] font-bold tracking-[0.9px] void text-glow italic mb-[3%]'>your vision?</h1>
     <StartCollaborationButton />
    </div>
  )
}

export default Collab
