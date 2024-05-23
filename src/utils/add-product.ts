import { Product } from "../Types/product";
import { sdk } from "../config/sharetribeSDK.config";

const { UUID, LatLng, Money, AvailabilityPlan, privateData } =
  require("sharetribe-flex-sdk").types;
export const addProduct = async (product: Product) => {
  const c: string = product?.images?.[0] || "";
  const images = product.images?.map((img) => new UUID(img));
  try {
    const res = await sdk.ownListings.create(product, {
      expand: true,
    });
    alert("The product was added successfully!");
  } catch (err) {
    console.log(err);
  }
};
