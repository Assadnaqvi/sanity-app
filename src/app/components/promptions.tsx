import React from 'react'
import Image from 'next/image'
const Promotions = () => {
  return ( <section className='mt-12'>
    <div>
   <div className='text-blue-700 text-sm font-bold flex justify-center mb-4'>PROMOTIONS</div>
   
   <div className='text-black text-4xl font-bold flex justify-center mb-12'>Our Promotions Events</div>
  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-2 mx-auto w-full'>
  <div className='justify-start ml-16'>
   <div ><div className='bg-gray-300 mb-8'>
  <div className='text-3xl font-bold pt-14 ml-6'>GET UP TO</div>
   <div className='text-4xl font-bold ml-6'>60%</div>
   <div className='text-xl font-medium ml-6'>For the summer</div>
   <div className='text-xl font-medium ml-6'>season</div>
    <div className="ml-40 -mt-48">  <Image src="/event1.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
   </div></div></div> 
  
     <div className=' bg-black text-white'>
         <h1 className='flex items-center justify-center pt-14 text-3xl font-bold pb-6 mt-6'>GET 30% Off</h1>
    <h2 className='flex items-center justify-center'> USE PROMO CODE</h2>
    <div className='flex items-center justify-center pb-14'><button className='bg-gray-600 rounded-sm pl-2 pr-2 p-1 text-white'>DINEWEEKENDSALE</button></div>
    </div></div>
   <div className='flex justify-end ml-8'>
    <div className='bg-orange-200'>
    <div className='ml-24 mt-8'>Flex Sweatshirt</div>
    <div className='flex'><div className='ml-24'>$100.00</div>
    <div className=' font-bold ml-2'>$75.00</div></div>
 <div className='-pb-8'> <Image src="/event2.png" alt="my image" width="320" height="480"  rounded-t-md></Image>
  </div></div>
 <div className='bg-gray-300 ml-8'>
 <div className='ml-16 mt-8'>Flex Push Button Bomber</div>
 <div className='flex'><div className='ml-16'>$225.00</div>
<div className='font-bold ml-2'>$190.00</div></div>
    <Image src="/event3.png" alt="my image" width="320" height="480"  rounded-t-md></Image>
    </div></div>    </div>
  </section>
    )
}

export default Promotions