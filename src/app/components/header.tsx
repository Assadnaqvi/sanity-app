"use client";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import {FaSearch} from "react-icons/fa"
import {CgShoppingCart} from "react-icons/cg"
import Counter from './addingstates'
import Link from 'next/link'

const Header = () => {
  return (<div className='flex justify-around'>
  <div className='flex justify-around'>
    <div className='mt-8'><Image src="/logo.png" alt="dinelogo" width="160" height="150"></Image></div>
  
<Link href="/females"><div className="ml-16 mt-9">Female</div></Link>
<Link href="/males"><div className="ml-16 mt-9">Male</div></Link>
<Link href="/kids"><div className="ml-16 mt-9">Kids</div></Link>
<Link href="/allproducts"><div className="ml-16 mt-9">All Products</div></Link>
  

<div><FaSearch className='mt-10 ml-10'/> </div><input className='pl-8 mt-8 -ml-6 opacity-60 text-gray-950 font-normal' type="search" placeholder='what you looking for' />
</div>
<div><CgShoppingCart  className='mt-10' size={22} />
</div> 
 
  </div>
    )
}

export default Header