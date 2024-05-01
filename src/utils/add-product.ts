import { Product } from "../components/Type";
import { sdk } from "../config/sharetribeSDK.config";
const { UUID, LatLng, Money, AvailabilityPlan ,privateData,metadata} = require("sharetribe-flex-sdk").types;
export const addProduct= async(product:Product)=>{
  debugger
  const c: string = product?.images?.[0] || '';
  const images = product.images?.map((img)=>new UUID(img))
  console.log('product  to send',product)
  try{
    const res = await sdk.ownListings.create(
      product,
     {
      expand: true,
    }
    )
    console.log(res)
    alert("The product was added successfully!");
    debugger
  }catch(err){
    console.log(err)
  }
  }  
;