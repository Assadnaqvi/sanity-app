import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='mt-28'>
     <div className='flex justify-evenly'>  
<div className=''>  <div className='mb-4'><Image src="/logo.png" alt="about image" width="160" height="150" className=""></Image>
</div>
  <div>Small, artisan label that offers a thoughtfully curated 
    <div>collection of high quality everyday essentials made.
      <div className='flex justify-evenly mt-6'>
      <Image src="Twitter.svg" alt="about image" width="30" height="20" className=""></Image>
  
      <Image src="facebook.svg" alt="about image" width="30" height="20" className=""></Image>
  <Image src="linkedin.svg" alt="about image" width="30" height="20" className=""></Image>

      </div>
    </div>
    </div></div>
<div>
<div className='font-bold'>Company   </div>
  <div>About</div>
    <div>Terms of Use</div>
      <div>Privacy Policy</div>
        <div>How it Works</div>
          <div>Contact Us</div>
          </div>
          
      
    
  <div>

<div className='font-bold'>Support</div> 
  <div>Support Carrer</div>

    <div>24h Service</div>
      <div>Quick Chat</div>
      </div>
    
  
<div>
<div className='font-bold'>Contact</div>
  <div>Whatsapp</div>
    <div>Support 24h</div>
    </div>
  
  
     
      </div>
 


      <div className='border border-gray-500 mt-32'></div> 
  <div className='flex justify-evenly mt-6 mb-12'>

    <div>
    <div>Copyright © 2022 Panaverse</div>
    <div>Market</div>

   
    </div>
    <div><div className='flex'><div>Design by.</div>
    <div className='font-bold'>panaverse</div></div>
    <div className='font-bold'>Design Studio</div>
    </div>
    <div>
<div className='flex'>
  <div>Code by. </div>
<div className='font-bold'>assadnaqvi</div></div>
<div className='font-bold'>github</div>
    </div>
    
    
    
     </div>
 
     </div>
 )
}

export default Footer