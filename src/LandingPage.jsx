import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-[#f5f3ef] flex flex-col justify-center pr-16 pl-16 h-[73vh] w-full text-[#1e1e21]'>
      <h1 className='-tracking-[7px] text-9xl'>Bent Lindberg <br />Digital Designer</h1>
      <div className='flex text-[26px] w-full justify-between mt-4 tracking-tight'>
        <h1>(Berlin, Germany)</h1>
        <div className='flex gap-2 '>
          <i class="ri-arrow-right-down-line text-4xl font-medium"></i>
          <h1>Scroll down</h1>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
