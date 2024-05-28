import { sdk } from "../config/sharetribeSDK.config";

export const uploadImage = async (file: File | null) => {
  if (file) {
    try {
      const res = await sdk.images.upload(
        {
          image: file,
        },
        {
          expand: true,
        }
      )
      return (res.data.data.id.uuid);
    }catch{}
   }
 }
 

  
  
