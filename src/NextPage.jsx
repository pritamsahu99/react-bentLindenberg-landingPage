// import React from 'react'

const NextPage = () => {
  return (
    <div className='h-screen overflow-hidden w-full bg-[#f5f3ef]'>
      <div className="flex items-center px-16">
      <div className="flex items-center py-16 border-b-2 border-solid border-black ">
      <div className="flex items-center justify-center text-[77px] leading-[4.8rem] font-semibold tracking-tight h-full w-[85%]">As a digital <br />designer, I focus <br />on producing top-notch and <br /> impactful digital experiences.</div>
      <div className="border-l-2 border-solid border-black ml-20 pl-16 h-[28rem] w-1/2 flex justify-between">
        <div className="text-2xl tede flex flex-col justify-between ">
          <h1 className="text-[1.6rem]">(About Me)</h1>
          <div className="flex">
          <i class="ri-instagram-line bg-[#1e1e21] cursor-pointer flex h-12 w-12 flex-col justify-center items-center rounded-full  mr-5 text-white font-extralight"></i>
          <i class="ri-twitter-line bg-[#1e1e21] cursor-pointer rounded-full flex h-12 w-12 flex-col justify-center items-center mr-5 text-white font-extralight"></i>
          <i class="ri-dribbble-line bg-[#1e1e21] cursor-pointer rounded-full flex h-12 w-12 flex-col justify-center items-center text-white font-extralight"></i>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default NextPage
