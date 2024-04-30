import { Box, InputLabel, MenuItem, Select, Slide, Slider, TextField } from "@mui/material";
import { Product } from './Type';
import {addProduct} from '../utils/add-product';
import  "./fformProduct.css";
import {shapesOptions} from './productConstants';
import {colorOptions} from './productConstants';
import {clarityOptions} from './productConstants';
import {cutOptions} from './productConstants';
import {polishOptions} from './productConstants';
import {symmetryOptions} from './productConstants';
import {uploadImage} from '../utils/upload-img';
import React, { ChangeEvent, useEffect, useState } from "react";
import { sdk } from "../config/sharetribeSDK.config";
import { cyan } from "@mui/material/colors";
const { UUID, LatLng, Money, AvailabilityPlan, publicData, privateData, metadata } = require("sharetribe-flex-sdk").types;
export const FormProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
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
        // setUser(loginRes.data);
      });
  };
  // e: React.ChangeEvent<HTMLInputElement>
  const [product, setProduct] = useState<Product>({
    title: "",
    description: "",
    // shapes: "",
    //  geolocation:{
    //   lat:0,
    //   lng:0
    //  },
      price: {
        amount:0,
        currency:"USD"
      },
      // availabilityPlan: {
      //   type:"",
      //   dayOfWeek:"",
      //   seats:0
      // },
    // privateData: {
    //   externalServiceId: ""
    // },
    // metadata:{
    //   polish:"",
    //   cut:"",
    //   lab:"",
    //   symmetry:"",
    //   natural:"",
    //   fluorescence:"",
    //   clarity:"",
    //   color:"",
    //   depth:"",
    //   size:"",
    //   shape:""
    // },
    publicData: {
      address: {
        city: "",
        country: "",
        state: "",
        street: ""
      },
      category: "",
      gears: 0,
      rules: ""
    },
    images: []
    ,
      // include: ["images"]

  })


  const uploadImg1 = async() => {
    const res = await uploadImage(selectedFile);
    console.log('img id: ',res)
    setProduct({ ...product, images:product.images?.concat(res) })
  }
  function valuetext(value: number) {
    return `${value}`;
}
  

  useEffect(() => {
    console.log('product', product)
  }, [product.images])
  return (<>
     {/* <button onClick={login}>login</button> */}
     {/* <button onClick={addProduct}>add!!!!!!!!</button> */}
   
    {/* <button onClick={() => uploadImage(selectedFile)}>upload</button> */}
 <div className="wraps">
   <label className="AddingProduct">add product</label>

   <div style={{display:"flex", gap:"100px"}} className="frame">
    <div>
    <TextField
    sx={{color:"cyan",boder:"2px solid cyan"
      }}
      margin="normal"
      required
      // fullWidth
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
      // fullWidth
      label="amount "
      name="Productprice"
      type="number"
      onChange={(e:any) => {

        setProduct({ ...product, price: { ...product.price,amount: Number( e.target.value) } })
      }}/>
      <br></br>
      <TextField type="file" color="success" id="myFile" onChange={handleFileChange} style={{width:"222.4px"}}></TextField>
      {/* <input type="file" id="myFile" onChange={handleFileChange} /> */}
      <br></br>
      <button onClick={() => uploadImg1()}>upload</button> 
      {/* onBlur={() => console.log(product)} */}
    </div>

    <div>
    <h1>attributes:</h1>
    
    <TextField
      margin="normal"
      required
      // fullWidth
      label="natural/lab"
      name="ProductpublicData"
      type="boolean"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,natural:e.target.value}  })
      }}
    />
     <br/>
    
     <InputLabel>shapes</InputLabel> 
    <Select
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,shapes:e.target.value}  })
        }}
        >
          {shapesOptions.map(shape=>(<MenuItem value={shape}>{shape}</MenuItem> ))}
    </Select>
    <br></br>
    {/* <InputLabel>size</InputLabel> 
    <InputLabel>width</InputLabel> */}
    {/* <Slider
       marks={marks}
       min={1}
       max={9999}
       step={1} */}
       {/* onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { */}
        {/* setProduct({ ...product, metadata:{...product.metadata,size:e.target.value}  }) */}
      {/* }} */}
       {/* > */}
     {/* </Slider> */}
      {/* margin="normal"
      required
      label="size"
      name="ProductpublicData"
      type="range"
     
      
      >
    </TextField> */}
    
    <label> size (between 1 and 9999):</label>
    <br/>
    <input type="range" id="vol" name="vol" min="1" max="9999"></input>
    {/* <Box className="box">
      <b>size</b>
          <Slider
            size="small"
            // onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
            //  setProduct({ ...product, metadata:{...product.metadata,size:e.target.value}  })}
            value={[1,9999]}
            style={{ 'color': '#FF00FF' }}
            getAriaValueText={valuetext}
        />
            
             <label >0 </label>
             <label >9999 </label>
         
        </Box> */}
    
    <br></br>
    <TextField
      margin="normal"
      required
      // fullWidth
      label="depth"
      name="ProductpublicData"
      type=""
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,depth:e.target.value}  })
      }}
    />
    <br/>
     <div style={{display:"flex"}}>
    <InputLabel>color</InputLabel> 
    <Select
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,color:e.target.value}  })
        }}
        >
           {colorOptions.map(color=>(<MenuItem value={color}>{color}</MenuItem> ))}
    </Select>

    <InputLabel>Clarity</InputLabel> 
    <Select
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Clarity:e.target.value}  })
        }}
        >
           {clarityOptions.map(clarity=>(<MenuItem value={clarity}>{clarity}</MenuItem> ))}
    </Select>
    </div>
    <br/>
    <div style={{display:"flex"}}>
    <InputLabel>cut</InputLabel> 
    <Select
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,cut:e.target.value}  })
        }}
        >
           {cutOptions.map(cut=>(<MenuItem value={cut}>{cut}</MenuItem> ))}
    </Select>
    <InputLabel>symmetry</InputLabel> 
    <Select
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,symmetry:e.target.value}  })
        }}
        >
           {symmetryOptions.map(symmetry=>(<MenuItem value={symmetry}>{symmetry}</MenuItem> ))}
    </Select>
    <InputLabel>polish</InputLabel> 
    <Select
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,polish:e.target.value}  })
        }}
        >
           {polishOptions.map(polish=>(<MenuItem value={polish}>{polish}</MenuItem> ))}
    </Select>
    </div>
 </div>
    
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Title"
      name="Producttitel"
      onChange={(e) => {
        setProduct({ ...product, title: e.target.value })
      }}
    />
    <TextField
      margin="normal"
      required
      // fullWidth
      label="Product description"
      name="Productdescription"
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({ ...product, description: e.target.value })
      }}
    />
   */}
    {/* latlng */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Lat"
      name="Productgeolocation"
      type="number"
      onChange={(e) => {
        setProduct({ ...product, geolocation: { ...product.geolocation, lat: Number(e.target.value) } })
      }}
    />
    {/* latlng */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Lng"
      name="Productgeolocation"
      type="number"
      onChange={(e) => {
        setProduct({ ...product, geolocation: { ...product.geolocation, lng:  Number(e.target.value) } })
      }} 
    /> */}
     {/* /price */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="amount "
      name="Productprice"
      type="number"
      onChange={(e:any) => {

        setProduct({ ...product, price: { ...product.price,amount: Number( e.target.value) } })
      }}
      onBlur={() => console.log(product)}
    />
    {/* price */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="currency "
      name="Productprice"
      //typeof="Money"
      onChange={(e:any) => {

        setProduct({ ...product, price: { ...product.price, currency: e.target.value } })
      }}
    />  */}
   
    {/* availabilityPlan */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="type"
      name="ProductavailabilityPlan"
      onChange={(e) => {
        setProduct({ ...product, availabilityPlan: { ...product.availabilityPlan, type: e.target.value } })
      }}
    />
    <InputLabel id="demo-simple-select-label">dayOfWeek</InputLabel> */}
    {/* <Select
      //  value=
      label="dayOfWeek"
      onChange={(e) => {
        setProduct({ ...product, availabilityPlan: { ...product.availabilityPlan, dayOfWeek: e.target.value } })
      }}
    >
      <MenuItem value={"san"}>san</MenuItem>
      <MenuItem value={"mon"}>mon</MenuItem>
      <MenuItem value={"tue"}>tue</MenuItem>
      <MenuItem value={"wed"}>wed</MenuItem>
      <MenuItem value={"thu"}>thu</MenuItem>
      <MenuItem value={"fri"}>fri</MenuItem>

    </Select> */}
    {/* availabilityPlan.entries */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="seats"
      name="ProductavailabilityPlan"
      // type="Array"
      type="number"
      // typeof="availabilityPlan"
      onChange={(e) => {
        setProduct({ ...product, availabilityPlan: { ...product.availabilityPlan, seats:Number( e.target.value) } })
      }}
    /> */}

    {/* availabilityPlan.entries */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="dayOfWeek"
      name="ProductavailabilityPlan"
      // type="Array"
      // type="week"
      typeof="availabilityPlan"
      onChange={(e) => {
        setProduct({ ...product, availabilityPlan:{...product.availabilityPlan.entries,dayOfWeek:e.target.value }})
      }}
    /> */}
   

    {/* PRIVATEdATA */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Product privateData"
      name="ProductprivateData"
      onChange={(e) => {
        setProduct({ ...product, privateData:{...product.privateData,externalServiceId: e.target.value} })
      }}
    /> */}
    {/* publicData.address */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="city"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,address:{...product.publicData.address,city:e.target.value}}  })
      }}
      onBlur={() => console.log(product)}
    /> */}
     {/* publicData.address */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="country"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,address:{...product.publicData.address,country:e.target.value}  }})
      }}
    /> */}
     {/* publicData.address */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="state"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,address:{...product.publicData.address,state:e.target.value}} })
      }}
    /> */}
     {/* publicData.address */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="street"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,address:{...product.publicData.address,street:e.target.value}}  })
      }}
    /> */}
         {/* publicData */}
         {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="category"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,category:e.target.value}  })
      }}
    /> */}
     {/* publicData */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="gears"
      name="ProductpublicData"
      type="number"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,gears:Number(e.target.value)}  })
      }}
    /> */}
    {/* publicData */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="rules"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, publicData:{...product.publicData,rules:e.target.value}  })
      }}
    /> */}
      {/* metadata
      <TextField
      margin="normal"
      required
      // fullWidth
      label="natural/lab"
      name="ProductpublicData"
      type=""
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,natural:e.target.value}  })
      }}
    /> */}
    {/* metadata
    <TextField
      margin="normal"
      required
      // fullWidth
      label="shapes"
      name="ProductpublicData"
      
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,shapes:e.target.value}  })
      }}
    /> */}
     {/* <InputLabel>shapes</InputLabel> 
    <Select
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,shapes:e.target.value}  })
        }}
        >
          {/* {Shapes.map <MenuItem value={"Round"}></MenuItem>} */}
       
    {/* </Select> */} 

    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="size"
      name="ProductpublicData"
      type="range"	 //Height 1 - 9999	 width 1 - 9999	length 1 - 9999	"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,size:e.target.value}  })
      }}
    /> */}
    
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="depth"
      name="ProductpublicData"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,depth:e.target.value}  })
      }}
    /> */}
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="color"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,color:e.target.value}  })
      }}
    /> */}
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="clarity"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,clarity:e.target.value}  })
      }}
    /> */}
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="cut"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,cut:e.target.value}  })
      }}
    /> */}
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="polish"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,polish:e.target.value}  })
      }}
    /> */}
     {/* metadata */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="symmetry"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,symmetry:e.target.value}  })
      }}
    /> */}
 {/* metadata */}
 {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="fluorescence"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,fluorescence:e.target.value}  })
      }}
    /> */}
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="lab"
      name="ProductpublicData"
      type="select"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,lab:e.target.value}  })
      }}
    /> */}
    {/* metadata */}
    {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Certificates"
      name="ProductpublicData"
      type="file"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Certificates:e.target.value}  })
      }}
    /> */}
   
     {/* metadata */}
     {/* <TextField
      margin="normal"
      required
      // fullWidth
      label="Vendor’s notes"
      name="ProductpublicData"
      type="string"
      onChange={(e) => {
        setProduct({ ...product, metadata:{...product.metadata,Vendor:e.target.value}  })
      }}
    /> */}
    <div>
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
    <br></br>
     {/* metadata */}
     <TextField
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
    <br></br>
     {/* metadata */}
     <TextField
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
    <br></br>
     {/* metadata */}
     <TextField
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
    </div>
   
  </div>
  <br></br>
  <div>
  <button className="addProduct" onClick={() => addProduct(product)}>add product</button>
  </div>
</div>
  </>)
}