import React from 'react'

function NavBar() {
  return (
    <div className='h-12 w-full z-[99] fixed text-xl bg-transparent text-white gap-2 flex items-center justify-end px-[32px] py-[60px]'>
        <h1 className='bg-[#1e1e21] rounded-full py-[14px] px-[21px]'>0</h1>
        <h1 className='bg-[#1e1e21] rounded-full py-[15px] px-[26px]'>Menu</h1>
    </div>
  )
}

export default NavBar
