import { Box, InputLabel, MenuItem, Select, Slide, Slider, TextField } from "@mui/material";
import { Product } from '../Types/product';
import {addProduct} from '../utils/add-product';
import  "./fformProduct.css";
import {shapesOptions} from './productConstants';
import {colorOptions} from './productConstants';
import {clarityOptions} from './productConstants';
import {cutOptions} from './productConstants';
import {polishOptions} from './productConstants';
import {symmetryOptions} from './productConstants';
import{FluorescenceOptions} from './productConstants';
import{LabOptions} from './productConstants';
import {uploadImage} from '../utils/upload-img';
import React, { ChangeEvent, useEffect, useState } from "react";
import { sdk } from "../config/sharetribeSDK.config";
import { cyan } from "@mui/material/colors";
import { number } from "yargs";
const { UUID, LatLng, Money, AvailabilityPlan, publicData, privateData, metadata } = require("sharetribe-flex-sdk").types;
export const FormProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = React.useState<number>(0);
    const handleChange= (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
        setProduct({ ...product, publicData:{...publicData,size: newValue as number}})
        console.log('value', newValue, newValue as number)
    };

  const handleFileChange = (event: any) => {
    debugger
    setSelectedFile(event.target.files[0]);
  };
  const login = () => {
    sdk
      .login({ username: "chana0533103377@gmail.com", password: "c24112002" })
      .then((loginRes: any) => {
        debugger;
        console.log("Login successful.", loginRes);
      });
  };
  const [product, setProduct] = useState<Product>({
    title: "",
      price: {
        amount:0,
        currency:"USD"
      },
      publicData:{
      polish:"",
      cut:"",
      lab:"",
      symmetry:"",
      natural:"",
      fluorescence:"",
      clarity:"",
      color:"",
      depth:"",
      size:value,
      shapes:""
    },
    images: [] ,
  })
  const uploadImg1 = async() => {
    const res = await uploadImage(selectedFile);
    console.log('img id: ',res)
    setProduct({ ...product, images:product.images?.concat(res) })
  }
  useEffect(() => {
    console.log('product', product)
  }, [product.images])
  return (<> 
  <label className="AddingProduct">add product</label> 
 <div className="wraps">
  <div style={{display:"flex", gap:"100px"}} className="frame">
    <div>
    <TextField
    sx={{color:"cyan",boder:"2px solid cyan"
      }}
      margin="normal"
      required
      label="Title"
      name="Producttitel"
      onChange={(e) => {
        setProduct({ ...product, title: e.target.value })
      }}
    />
    <br></br>
     <TextField
      margin="normal"
      required
      label="amount "
      name="Productprice"
      type="number"
      onChange={(e:any) => {
        setProduct({ ...product, price: { ...product.price,amount: Number( e.target.value) } })
      }}/>
      <br></br>
      <TextField type="file" color="success" id="myFile" onChange={handleFileChange} style={{width:"222.4px"}}></TextField>
      <br></br>
      <button className="upload" onClick={() => uploadImg1()}>upload</button> 
    </div>
    <div>
    <h1 className="attributes">attributes:</h1>
    <TextField
      margin="normal"
      required
      label="natural/lab"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,natural:e.target.value}  })
      }}
    />
     <br/>
     <InputLabel>shapes</InputLabel> 
    <Select   style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,shapes:e.target.value}  })
        }}
        >
          {shapesOptions.map(shape=>(<MenuItem value={shape}>{shape}</MenuItem> ))}
   </Select>
         <br></br>
    <label> size (between 1 and 999):</label>
    <br/>
    <Box sx={{ width: 300 }}>
      <Slider
      max={999}
      min={1}
      onChange={handleChange} 
      value={value}
      size="small"
      valueLabelDisplay="auto"
      />
       </Box> 
    <TextField
      margin="normal"
      required
      label="depth"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,depth:e.target.value}  })
      }}
    />
    <br/>
     <div style={{display:"flex"}} className="color-clarity">
      <div>
    <InputLabel>color</InputLabel> 
    <Select  style={{width:"5vi"  , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,color:e.target.value}  })
        }}
        >
           {colorOptions.map(color=>(<MenuItem value={color}>{color}</MenuItem> ))}
    </Select>
    </div>
    <div>
    <InputLabel>Clarity</InputLabel> 
    <Select  style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,Clarity:e.target.value}  })
        }}
        >
           {clarityOptions.map(clarity=>(<MenuItem value={clarity}>{clarity}</MenuItem> ))}
    </Select>
    </div>
    </div>
    <br></br>
    <div style={{display:"flex"}} className="cut-symmetry-polish">
      <div>
    <InputLabel>cut</InputLabel> 
    <Select  style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,cut:e.target.value}  })
        }}
        >
           {cutOptions.map(cut=>(<MenuItem value={cut}>{cut}</MenuItem> ))}
    </Select>
    </div>
    <div>
    <InputLabel>symmetry</InputLabel> 
    <Select  style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,symmetry:e.target.value}  })
        }}
        >
           {symmetryOptions.map(symmetry=>(<MenuItem value={symmetry}>{symmetry}</MenuItem> ))}
    </Select>
    </div>
    <div>
    <InputLabel>polish</InputLabel> 
    <Select  style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,polish:e.target.value}  })
        }}
        >
           {polishOptions.map(polish=>(<MenuItem value={polish}>{polish}</MenuItem> ))}
    </Select>
    </div>
    </div>
    <br/>
    <div style={{display:"flex"}} className="Fluorescence-lab">
      <div>
    <InputLabel>Fluorescence</InputLabel> 
    <Select  style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,Fluorescence:e.target.value}  })
        }}
        >
           {FluorescenceOptions.map(Fluorescence=>(<MenuItem value={Fluorescence}>{Fluorescence}</MenuItem> ))}
    </Select>
    </div>
    <div>
    <InputLabel>lab</InputLabel> 
    <Select  style={{width:"5vi" , height:"2vi"}}
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,lab:e.target.value}  })
        }}
        >
           {LabOptions.map(lab=>(<MenuItem value={lab}>{lab}</MenuItem> ))}
    </Select>
    </div>
    </div>
    <br></br>
    <div>
     <button className="addProduct" onClick={() => addProduct(product)}>add</button>
    </div>
 </div>
    
    {/* <div>
    <TextField
      margin="normal"
      required
      // fullWidth
      label="Vendor’s notes"
      name="ProductpublicData"
      type="string"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Vendor:e.target.value}  })
      }}
    />
    <br></br> */}
     {/* metadata */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Shipping options"
      name="ProductpublicData"
      type="string"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Shipping:e.target.value}  })
      }}
    />
    <br></br> */}
     {/* metadata */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Insurance options"
      name="ProductpublicData"
      type="string"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Insurance:e.target.value}  })
      }}
    />
    <br></br> */}
     {/* metadata */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Funding options"
      name="ProductpublicData"
      type="string"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Funding:e.target.value}  })
      }}
    />
    </div> */}
  </div>
  <br></br>
</div>
  </>)
}