"use client";
import React from 'react'
import Image from "next/image";
import { Image as IImage } from "sanity";
import { Client } from '@vercel/postgres';
import { urlForImage } from '../../../sanity/lib/image';
import {FC} from "react";

const Womenaddtocart:FC<{item:any}> = ({item}) => {
const handleAddToCart=async()=>{
    const res= await fetch("/api/cart",{
        method:"POST",
        body:JSON.stringify({
            product_id:item._id
        })
    })
const result=await res.json()
console.log(result)
}


  return (
    <div>  <Image  src={urlForImage(item.image).url()} alt="product" height="200" width="200"/>
    <h2> {item.title}</h2>
    <h2> ${item.price}</h2>
     <button onClick={handleAddToCart} className="bg-blue-600 px-6 py-2 rounded-medium text-white">Add To Cart</button>
     </div>
  )
}

export default Womenaddtocart