import React from 'react'

export function CardId1(){
    return(
        <div className='w-[280px] h-[270px] flex flex-col px-4 py-2 gap-4 justify-start border border-gray-100 rounded-[7px]'>
        <img className='h-[150px]' src="https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg" alt="" />
        <div className='flex w-full justify-around'>
            <span>Blog</span>
            <span>14-may-2024</span>
        </div>
        <p className=''>លេងបិទពួនជាមួយ Searching Algorithm</p>
      </div>
    );
}

const CardItComponent = () => {
  return (
    <div className=' mx-auto w-10/12 flex flex-wrap gap-6'>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
      <CardId1/>
    </div>
  )
}

export default CardItComponent
