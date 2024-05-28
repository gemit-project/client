
import React from "react"
import { sdk } from "../config/sharetribeSDK.config";
const { UUID, LatLng, Money ,availabilityPlan,publicData,privateData,metadata} = require("sharetribe-flex-sdk").types;
export type Product={
    title:string,
    description?: string,
     price?:typeof Money,
     privateData?:typeof privateData,
     publicData?:typeof publicData,
     metadata?:typeof metadata,
     images?: Array<typeof UUID>
}
