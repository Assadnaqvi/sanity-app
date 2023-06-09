"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Timer() {
  
  const [increment, setIncrement] = useState(0);

  

  return (
    <>
     
      <hr />
      
      
      <div className='flex justify-center text-3xl font-bold '>
        
        <button className='p-10' disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button className='p-10' onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </div>
   
      <div className='mt-16 pl-20 pr-20 grid sm:grid-cols-2 md:grid-cols-4 gap-16 mx-auto w-full'>
      
                
          
             
   
      <div className=''>
        
         <Image src="/blackshirt.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
     <div className='text-1xl font-bold mb-4'>Brushed Raglan Sweatshirt</div>
     <div>Sweater</div>
     <div className='text-2xl font-bold mt-4'>$195</div>
      </div>
    
      
     
     
     
     
       
        
      <div className=''>
        
         <Image src="/cameryn.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Cameryn Sash Tie Dress</div>
     <div>Dress</div>
     <div className='text-2xl font-bold mt-4'>$195</div>
     
      </div>
     
     
     
    
     
     
         
      
           
      <div className=''>
         
         <Image src="/grayshirt.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Flex Sweatshirt</div>
     <div>Sweater</div>
     <div className='text-2xl font-bold mt-4'>$195</div>
     
      </div>
    
     
     
     
     
     
            
      
            
      <div className=''>
       
         <Image src="/flexpent.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Flex Sweatpants

</div>
     <div>Pants</div>
     <div className='text-2xl font-bold mt-4'>$195</div>
     
      </div>
    
     
     
    
     
     
             
           
      <div className=''>
         
         <Image src="/pinkflees.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Pink Fleece Sweatpants

</div>
     <div>Pants</div>
     <div className='text-2xl font-bold mt-4'>$195</div>
     
      </div>
     
     
     
    
     
     
            
           
      <div className=''>
        
         <Image src="/litepent.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Lite Sweatpants



</div>
     <div>Pants</div>
     <div className='text-2xl font-bold mt-4'>$150</div>
    
      </div>
    
     
     
    
     
     
           
   
   
         
     
     
     
   
     
     
            
      
           
      <div className=''>
        
         <Image src="/imperial.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Imperial Alpaca Hoodie



</div>
     <div>Jackets</div>
     <div className='text-2xl font-bold mt-4'>$525</div>
     </div>
    
     
     
   
     
     
            
      
      
     
     
    
     
     
           
      
            
      <div className=''>
     
         <Image src="/muscle.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
         <div className='text-1xl font-bold mb-4'>Muscle Tank



</div>
     <div>T Shirts</div>
     <div className='text-2xl font-bold mt-4'>$75</div>
     </div>
     
     
     
   
     
     
         
             
      
      <div className=''>
        
         <Image src="/brushed.png" alt="my image" width="320" height="420"  rounded-t-md></Image>
    
         <div className='text-1xl font-bold mb-4'>Brushed Bomber





</div>
     <div>Jackets</div>
     <div className='text-2xl font-bold mt-4'>$225</div>
    
     
     
     </div>
     
     
          
            
     
     
     
     
   
     
     
             
               
             </div> 
    </>
  );
}
