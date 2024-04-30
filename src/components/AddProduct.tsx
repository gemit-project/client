import { useEffect, useState } from "react";
import { sdk } from "../config/sharetribeSDK.config";
import { uploadImage } from "../utils/upload-img";
const { UUID, LatLng, Money } = require("sharetribe-flex-sdk").types;

export const AddProduct = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [user, setUser] = useState();
    const [fileId, setFileId] = useState("");

    const handleFileChange = (event: any) => {
      setSelectedFile(event.target.files[0]);
    };
    
    // const uploadImage=()=>
    // // user &&
    //    {  //
    //  if ( selectedFile) {
    //       ////
        
    //     sdk.images .upload(
    //         {
    //           image: selectedFile,
    //         },
    //         {
    //           expand: true,
    //         }
    //       )
    //       .then((res: any) => {

            
    //        //;
    //         setFileId(res.data.data.id.uuid)
            
    //       });
//     //   }
//     return(<></>)
// }
   //;
    //  const addProduct= ()=>{
    // sdk.ownListings.create(
    //     {
    //       title: "Diamond3",
    //       description: "bbb",
    //       geolocation: new LatLng(40.64542, -74.08508),
    //       // availabilityPlan: {
    //       //   type: "availability-plan/day",
    //       //   entries: [
    //       //     {
    //       //       dayOfWeek: "mon",
    //       //       seats: 3
    //       //     },
    //       //     {
    //       //       dayOfWeek: "fri",
    //       //       seats: 1
    //       //     }
    //       //   ]
    //       // },
    //       // privateData: {
    //       //   externalServiceId: "abcd-service-id-1234"
    //       // },
    //       publicData: {
    //         address: {
    //           city: "New York",
    //           country: "USA",
    //           state: "NY",
    //           street: "230 Hamilton Ave",
    //         },
    //         category: "Diamonds",
    //         gears: 23,
    //         rules: "very beatiful diamond.",
    //       },
    //       price: new Money(46788, "USD"),
    //       images: [
    //         new UUID(fileId)
    //         // new UUID("660310d6-88bb-4163-91cd-6d6b25b73537"),
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
      
    //   return (<>
    //     <input type="file" id="myFile" onChange={handleFileChange} />
    //     <button onClick={()=>uploadImage(selectedFile)}>upload</button>
    //     <button className="addProduct" onClick={()=>addProduct({
          
    //     })}>addProduct</button>
    // </>)
  }