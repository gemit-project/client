const { UUID } = require("sharetribe-flex-sdk").types;

export type Image = {
  attributes: {
    variant: {
      default: {
        height: number;
        name: string;
        url: string;
        width: 750;
      };
    };
    id: typeof UUID;
    type: "image";
  };
};
