const { UUID } = require("sharetribe-flex-sdk").types;

export type Vendor =  {
  attributes: {
    banned: boolean;
    createdAt: Date;
    deleted: boolean;
    profile: {
      abbreviatedName: string;
      bio: string;
      displayName: string;
      metadata: {};
      publicData: {
        age: number;
        type: "Vendor";
      };
    };
  };
  id: typeof UUID;
  type: "user";
};
