import React from 'react'

export function CardJob1(){
    return(
        <div className='w-[280px] h-[270px] flex flex-col px-4 py-2 gap-4 justify-start border border-gray-100 rounded-[7px]'>
        <img className='h-[150px]' src="https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png" alt="" />
        <div className='flex w-full justify-around'>
            <span>Blog</span>
            <span>14-may-2024</span>
        </div>
        <p className=''>WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer</p>
      </div>
    );
}

const CardJobComponent = () => {
  return (
    <div>
      <div className=' mx-auto w-10/12 flex flex-wrap gap-6'>
        <CardJob1 />
        <CardJob1 />
        <CardJob1 />
      </div>
    </div>
  )
}

export default CardJobComponent
