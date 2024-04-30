// import { type } from "os"
import React from "react"
import { sdk } from "../config/sharetribeSDK.config";
//import { UUID } from "crypto";
const { UUID, LatLng, Money ,availabilityPlan,publicData,privateData,metadata} = require("sharetribe-flex-sdk").types;
export type Product={
    title:string,
    description?: string,
    // shapes: string,
    // geolocation?:typeof LatLng ,
     price?:typeof Money,
    // availabilityPlan?:typeof availabilityPlan,
     privateData?:typeof privateData,
     publicData?:typeof publicData,
     metadata?:typeof metadata,
     images?: Array<typeof UUID>
   
   
}
