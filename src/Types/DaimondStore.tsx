
const { UUID, Money ,availabilityPlan,publicData} = require("sharetribe-flex-sdk").types;

export type DaimondStore={
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
      type: "listing";
}