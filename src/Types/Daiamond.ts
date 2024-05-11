
const { UUID, LatLng, Money ,availabilityPlan,publicData,privateData} = require("sharetribe-flex-sdk").types;
export type Daimond = {
 data:{ 
  attributes: {
    description: string;
    deleted: boolean;
    geolocation: string;
    createdAt: Date;
    state: string;
    availabilityPlan:typeof availabilityPlan;
    metadata: {};
    price:typeof Money;
    publicData:typeof publicData;
    title: string;
  };
  id:typeof UUID ;
  type: string;
}
included?:[];
};
