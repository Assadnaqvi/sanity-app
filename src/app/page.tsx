import Image from "next/image";
import { Image as IImage } from "sanity";
import {client} from "./lib/sanityClient"
import { urlForImage } from "../../sanity/lib/image";
import { Product } from "../../sanity/product";
import ProductCard from "./productCard";

export const getProductData=async ()=>{
  const res=await client.fetch(`*[_type=="product"]{
    price,
      _id,
      title,
      image,
      category -> {name}
  }`);
return res



}
interface IProduct{

  title:string,
  _id:string,
  description:string
image:IImage,
price:number,
categary:{
  name:string
}

}

export default async function Home(){
  const data:IProduct[]= await getProductData()
 console.log(data)
  return  ( <div className="grid grid-cols-[auto,auto] justify-center gap-4">
      {data.map((item)=>(
     
        
        <ProductCard item={item} />
      
      
))}
    </div>
  )
      }
