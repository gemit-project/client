import { sdk } from "../config/sharetribeSDK.config";

export const uploadImage = async (file: File | null) => {
  debugger
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
      // if (res.ok) {
      //   debugger
      //   return await res
      // }
     
      return (res.data.data.id.uuid);
    }catch{}
    // } {(err:any)=>{debugger
    // console.log(err)
    // debugger
    // }
  }
      
    
 
    // catch((err:any)=>{
    //   debugger
    //   console.log(err)
    // })
   }
    // .then((res: any) => {
    //   debugger

    //   return (res.data.data.id.uuid)

    // }).catch((err: any) => {
    //   debugger
    //   return err;
    // });

  
  
