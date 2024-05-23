import React from "react"
import { sdk } from "../config/sharetribeSDK.config";
const { UUID, LatLng, Money ,availabilityPlan,publicData,privateData} = require("sharetribe-flex-sdk").types;
export type Product={
     title:string,
     price?:typeof Money,
     privateData?:typeof privateData,
     publicData?:typeof publicData,
     images?: Array<typeof UUID>
}