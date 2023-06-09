import React from 'react'

import { Button } from "../components/button"
import {HiOutlineShoppingCart} from "react-icons/hi"
import Image from 'next/image'
const Hero = () => {
  return ( <section className='flex max-w-auto mx-auto md:flex-row flex-col mt-16'> 
   
 
      <div className='ml-28 mt-18 '>
       <span className='bg-blue-100 rounded-md h-8 w-12 text-lg text-blue-700 pl-4 pr-4 pt-3 pb-3 font-medium'>Sale 70%</span>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">
          An Industrial Take on </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
         Streetwear
          </h1>
        

    <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8 mr-20">
    Anyone can beat you but no one can beat your outfit as long as <br/>you wear Dine outfits.
    </p>
    

    


  
    <Button>
    <HiOutlineShoppingCart className="mr-2 h-4 w-4" />  Start Shopping
    </Button>
   <div className='flex justify-around mt-24'> <Image src="/Featured1.png" alt='header.pic' width="120" height="130"></Image>
    <Image src="/Featured2.png" alt='header.pic' width="120" height="130"></Image>
    <Image src="/Featured3.png" alt='header.pic' width="120" height="130"></Image>
    <Image src="/Featured4.png" alt='header.pic' width="120" height="130"></Image>


 </div>
      </div>
        
  
      
        <div className="bg-orange-100 h-1/2 w-1/3 rounded-full ml-36">
<Image src="/header.png" alt='header.pic' width="650" height="660"></Image>

</div> 
        
  </section>)
}

export default Hero