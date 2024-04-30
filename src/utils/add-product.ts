import { Product } from "../components/Type";
import { sdk } from "../config/sharetribeSDK.config";
const { UUID, LatLng, Money, AvailabilityPlan ,privateData,metadata} = require("sharetribe-flex-sdk").types;
export const addProduct= async(product:Product)=>{
  debugger
  const c: string = product?.images?.[0] || '';
  const images = product.images?.map((img)=>new UUID(img))
  //const geo = new LatLng(78, 87)
  //const glo = new LatLng(prop.geolocation.lat, prop.geolocation.lng)
  // const pr = new Money(prop.price.amount, prop.price.currency)
  // const ava=new AvailabilityPlan(prop.availabilityPlan.type, prop.availabilityPlan.dayOfWeek, prop.availabilityPlan.seats)
  // const pri =new privateData(prop.privateData)
  debugger
  // const addProduct = () => {
    debugger;
    // sdk.ownListings
    //   .create(
    //     {
    //       title: product.title,
    //       description:product.description,
          
          // geolocation: new LatLng(40.64542, -74.08508),
          // availabilityPlan: {
          //   type: "availability-plan/day",
          //   entries: [
          //     {
          //       dayOfWeek: "mon",
          //       seats: 3
          //     },
          //     {
          //       dayOfWeek: "fri",
          //       seats: 1
          //     }
          //   ]
          // },
          // privateData: {
          //   externalServiceId: "abcd-service-id-1234"
          // },
          // publicData: {
          //   address: {
          //     city: "New York",
          //     country: "USA",
          //     state: "NY",
          //     street: "230 Hamilton Ave",
          //   },
          //   category: "Diamonds",
          //   gears: 23,
          //   rules: "very beatiful diamond.",
          //   size: 10,
          // },
          // price: new Money(46788, "USD"),
          // images: [
          //   new UUID("660310d6-88bb-4163-91cd-6d6b25b73537"),
          //   // new UUID("f8afadaa-dd4f-4536-b9a7-b405834dc25d")
          // ],
      //   },
      //   {
      //     expand: true,
      //     //  include: ["images"],
      //   }
      // )
      // .then((res: any) => {
      //   debugger;
      //   // res.data
      // })
      // .catch((err: any) => {
      //   debugger;
      // });
  
  
//   const product = {
//       title:"", 
//       description:"",
//       // shapes: "pear",
//       // geolocation: glo ,
//       //  price:pr,

//       // availabilityPlan:prop.availabilityPlan,
//       //  privateData:prop.privateData,
//       //  publicData:prop.publicData,
//       //  metadata:prop.metadata,
//       // images:prop.images ,
//       // include: ["images"],
//        images: images,
//     }

   debugger
  console.log('product  to send',product)
  try{
    
    const res = await sdk.ownListings.create(
      product,
     {
      expand: true,
      //  include: ["images"],
    }
    )
    debugger
    console.log(res)
    // const data = await res;
    // return data
    alert("The product was added successfully!");
  }catch(err){
    debugger
    console.log(err)
  }
  }  

;
          // availabilityPlan: {
          //   type: "availability-plan/day",
          //   entries: [
          //     {
          //       dayOfWeek: "mon",
          //       seats: 3
          //     },
          //     {
          //       dayOfWeek: "fri",
          //       seats: 1
          //     }
          //   ]
          // },
          // privateData: {
          //   externalServiceId: "abcd-service-id-1234"
          // },
        //   publicData: {
        //     address: {
        //       city: "New York",
        //       country: "USA",
        //       state: "NY",
        //       street: "230 Hamilton Ave",
        //     },
        //     category: "Diamonds",
        //     gears: 23,
        //     rules: "very beatiful diamond.",
        //   },
        //   price: new Money(46788, "USD"),
        //   images: [
        //     new UUID(fileId)
            // new UUID("660310d6-88bb-4163-91cd-6d6b25b73537"),
    //         // new UUID("f8afadaa-dd4f-4536-b9a7-b405834dc25d")
    //       ]
    //     },
    //     {
    //       expand: true,
    //       include: ["images"],
    //     }
    //   )
    //   .then((res: any) => {
    //    //;
    //     // res.data
    //   })
    //   .catch((err: any) => {
    //    //;
    //   });
    // }
