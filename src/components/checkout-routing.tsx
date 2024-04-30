import { Route, Routes } from "react-router"
import StatusLine from "./topComponent/statusLine"
import General from "./paymentFirstscreen/buttomComponent/general"
import { ShippingAndInsurance } from "./shipping&insurance"
import { FundingOptions } from "./fundingOptions"
import { Confirmation } from "./confirmation"
import { Payment } from "./payment"

export const CheckoutRouting = () =>{
    return(<>
  
            <Route path="/General" element={< General />} />
            <Route path="/ShippingAndInsurance" element={< ShippingAndInsurance />} />
            <Route path="/FundingOptions" element={< FundingOptions />} />
            <Route path="/Payment" element={< Payment />} />
            <Route path="/Confirmation" element={< Confirmation />} />
    </>)
}