import React from 'react'
import { Button } from "../components/button"
import {HiOutlineShoppingCart} from "react-icons/hi"
const Subscribe = () => {
  return (
    <div className='mt-32'><div className='flex justify-center text-4xl font-bold'>Subscribe Our Newsletter</div>
  <div className='flex justify-center mt-4'>Get the latest information and promo offers directly</div>
  <div className='flex justify-center'><div className='flex justify-center'> <input className='pl-4 mt-8 text-black font-normal text-1xl' type="search" placeholder='input email address' /> </div>
  <div className='flex justify-center mt-8 ml-4 '><Button className=''>Get Started
    </Button></div></div>
  </div>    )
}

export default Subscribe