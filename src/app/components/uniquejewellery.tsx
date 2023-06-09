import React from 'react'
import Image from 'next/image'
import { Button } from './button'
const UniqueJewellery = () => {
  return (<div className='mt-32'>   <div className='text-5xl font-bold mt-40 text-left'> <div className='mr-80 flex justify-end'>Unique and </div>
      <div className='flex justify-end mr-40'>  Authentic Vintage </div>
      <div className='flex justify-end mr-36'>  Designer Jewellery</div>
      </div>
     
      <div className='flex justify-evenly pt-16 pb-16'>
      <div>
        <div className='text-lg font-bold'>Using Good Quality</div>
        <div className='font-bold text-lg'>Materials</div>
        <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>
       
        <div className='text-lg font-bold'>Modern Fashion</div>
        <div className='font-bold text-lg'>Design</div>
        <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>
        </div>
   
    <div>
     <div className='text-lg font-bold'>
     100% Handmade
     </div>
     <div className='text-lg font-bold'>Products</div>
     <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>
      
     

     
     <div className='text-lg font-bold'>Discount for Bulk</div>
        <div className='font-bold text-lg'>Orders</div>
        <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>
        </div>
      <div>
         
      <Image src="/imperial.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
   
      </div>
      
      <div><p>This piece is ethically <br/>crafted in our small family-<br/>owned workshop in Peru <br/>with unmatched attention<br/> to detail and care. The<br/> Natural color is the actual<br/> natural color of the fiber,<br/> undyed and 100% <br/>traceable.</p><Button className='p-6 mt-12'>See All <br/>Products</Button></div>
      </div>

      </div>
      )
}



export default UniqueJewellery