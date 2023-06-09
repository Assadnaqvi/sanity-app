import React from 'react'
import Image from 'next/image'
const Male = () => {
  return (
 <div className='mt-12 pl-32 pr-32 grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full'>
      
      <div className=''>
    
    <Image src="/flexpush.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
   <div className='text-1xl font-bold mb-4'> Flex Push Button Bomber</div>
     <div>Jackets</div>
     <div className='text-2xl font-bold mt-4'>$225</div>
      
     </div>




    <div className=''>
     
       <Image src="/raglan.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
       <div className='text-1xl font-bold mb-4'>  Raglan Sweatshirt</div>
     <div>Sweater</div>
     <div className='text-2xl font-bold mt-4'>$195</div>
     


    </div>
   </div>
  )
}

export default Male