import {
    Box,
    InputLabel,
    MenuItem,
    Select,
    Slide,
    Slider,
    TextField,
    colors,
  } from "@mui/material";
  import { SDiamond } from "../Types/Send-diamond";
  import { addProduct } from "../utils/add-product";
  import "./fform-product.css";
  import { shapesOptions } from "./productConstants";
  import { colorOptions } from "./productConstants";
  import { clarityOptions } from "./productConstants";
  import { cutOptions } from "./productConstants";
  import { polishOptions } from "./productConstants";
  import { symmetryOptions } from "./productConstants";
  import { FluorescenceOptions } from "./productConstants";
  import { LabOptions } from "./productConstants";
  import { uploadImage } from "../utils/upload-img";
  import React, { ChangeEvent, useEffect, useState } from "react";
  import { sdk } from "../config/sharetribeSDK.config";
  import { cyan } from "@mui/material/colors";
  import { number } from "yargs";
  import { useSelector } from "react-redux";
  import { profile } from "console";
  const {
    UUID,
    LatLng,
    Money,
    AvailabilityPlan,
    publicData,
    privateData,
    metadata,
  } = require("sharetribe-flex-sdk").types;
  
  export const FormProduct = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
    const [value, setValue] = React.useState<number>(0);
  
    const currentUser = useSelector((state: any) => state.user.currentUser);
    debugger
    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
      setProduct({
        ...product,
        publicData: { ...product.publicData, Size: newValue as number },
      });
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedFile(event.target.files ? event.target.files[0] : null);
    };
  
    const [product, setProduct] = useState<SDiamond>({
      title: "",
      price: {
        amount  : 0,
        currency: ""
      }, 
      publicData: {
        Email: currentUser?.data?.attributes?.email,
        Profil: currentUser?.data?.attributes?.profile,
        img: currentUser.included
        ? currentUser.included[0].attributes.variants.default
            .url
        : "" ,
        Polish: "",
        Country: "",
        Cut: "",
        Lab: "",
        Natural: "",
        Symmetry: "",
        Fluorescence: "",
        Clarity: "",
        Color: "",
        depth: "",
        Size: value,
        Shape: "",
      },
      privateData:{},
      images: [],
    
    });
  debugger
  useEffect(()=>{
   
        setProduct({
          ...product,
          publicData: { ...product.publicData, Profil: currentUser?.data?.attributes?.profile },
        });
  },[product.title]);
  
  useEffect(()=>{
    setProduct({
      ...product,
      publicData: {...product.publicData,Email: currentUser?.data?.attributes?.email} 
    });
  },[product.price?.amount])
  useEffect(()=>{
   
    setProduct({
      ...product,
      publicData: { ...product.publicData, img: currentUser.included
        ? currentUser.included[0].attributes.variants.default
            .url
        : "" },
    });
  },[product.price?.currency]);
    useEffect(() => {
      console.log("product:", product);
    }, [product]);
    const uploadImg1 = async () => {
      const res = await uploadImage(selectedFile);
      setProduct({ ...product, images: product.images?.concat(res) });
    };
  
    return (
      <>
        <br></br>
        <div  style={{ }} className="wraps">
          <div style={{alignItems:'center'}}><label className="AddingProduct">add product</label></div>
          <div style={{ display:"flex", gap: "100px", border:"3px solid black", borderColor:"#0008ff" ,alignItems:"center"}}  className="frame">
            <div>
              <TextField
                sx={{ color: "cyan", boder: "2px solid cyan" }}
                margin="normal"
                required
                label="Title"
                name="Producttitel"
                onChange={(e) => {
                  setProduct({ ...product, title: e.target.value });
                }}
              />
              <br></br>
              <TextField
                margin="normal"
                required
                label="price"
                name="Productprice"
                type="number"
                onChange={(e: any) => {
                  setProduct({
                    ...product,
                    price: { ...product.price, amount: Number(e.target.value) },
                  });
                }}
              />
              <br></br>
              <TextField
                margin="normal"
                required
                label="currency"
                name="Productprice"
                onChange={(e: any) => {
                  setProduct({
                    ...product,
                    price: { ...product.price, currency: e.target.value },
                  });
                }}
              />
              <br></br>
              <TextField
                margin="normal"
                required
                label="country"
                name="Productcountry"
                onChange={(e: any) => {
                  setProduct({ ...product,publicData:{...product.publicData, Country: e.target.value }});
                }}
              />
              <br></br>
              <TextField
                type="file"
                color="warning"
                id="myFile"
                onChange={handleFileChange}
                style={{ width: "222.4px" }}
              ></TextField>
              <br></br>
              <button className="upload" onClick={() => uploadImg1()}>
                upload
              </button>
            </div>
            <div>
              <h1 className="attributes">attributes:</h1>
              <br />
              <TextField
                margin="normal"
                required
                value="Natural"
                name="ProductpublicData"
                type="radio"
                onChange={(e) => {
                  setProduct({
                    ...product,
                    publicData: {
                      ...product.publicData,
                      Natural: e.target.value,
                    },
                  });
                }}
              />
              <label>natural</label>
              <br />
  
              <TextField
                margin="normal"
                required
                value="lab"
                name="ProductpublicData"
                type="radio"
                onChange={(e) => {
                  setProduct({
                    ...product,
                    publicData: { ...product.publicData, Lab: e.target.value },
                  });
                }}
              />
              <label>lab</label>
              <br />
              <InputLabel>shape</InputLabel>
              <Select
                style={{ width: "10vi", height: "2vi" }}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    publicData: { ...product.publicData, Shape: e.target.value },
                  });
                }}
              >
                {shapesOptions.map((shape) => (
                  <MenuItem value={shape}>{shape}</MenuItem>
                ))}
              </Select>
              <br></br>
              <label> Size (between 1 and 999):</label>
              <br />
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
              <br />
              <div style={{ display: "flex" }} className="color-clarity">
                <div>
                  <InputLabel>Color</InputLabel>
                  <Select
                    style={{ width: "5vi", height: "2vi"}}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        publicData: {
                          ...product.publicData,
                          Color: e.target.value,
                        },
                      });
                    }}
                  >
                    {colorOptions.map((color) => (
                      <MenuItem value={color}>{color}</MenuItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <InputLabel>Clarity</InputLabel>
                  <Select
                    style={{ width: "5vi", height: "2vi" }}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        publicData: {
                          ...product.publicData,
                          Clarity: e.target.value,
                        },
                      });
                    }}
                  >
                    {clarityOptions.map((clarity) => (
                      <MenuItem value={clarity}>{clarity}</MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <br></br>
              <div style={{ display: "flex" }} className="cut-symmetry-polish">
                <div>
                  <InputLabel>Cut</InputLabel>
                  <Select
                    style={{ width: "5vi", height: "2vi" }}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        publicData: {
                          ...product.publicData,
                          Cut: e.target.value,
                        },
                      });
                    }}
                  >
                    {cutOptions.map((cut) => (
                      <MenuItem value={cut}>{cut}</MenuItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <InputLabel>Symmetry</InputLabel>
                  <Select
                    style={{ width: "5vi", height: "2vi" }}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        publicData: {
                          ...product.publicData,
                          Symmetry: e.target.value,
                        },
                      });
                    }}
                  >
                    {symmetryOptions.map((symmetry) => (
                      <MenuItem value={symmetry}>{symmetry}</MenuItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <InputLabel>Polish</InputLabel>
                  <Select
                    style={{ width: "5vi", height: "2vi" }}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        publicData: {
                          ...product.publicData,
                          Polish: e.target.value,
                        },
                      });
                    }}
                  >
                    {polishOptions.map((polish) => (
                      <MenuItem value={polish}>{polish}</MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <br />
              <div style={{ display: "flex" }} className="Fluorescence-lab">
                <div>
                  <InputLabel>Fluorescence</InputLabel>
                  <Select
                    style={{ width: "5vi", height: "2vi" }}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        publicData: {
                          ...product.publicData,
                          Fluorescence: e.target.value,
                        },
                      });
                    }}
                  >
                    {FluorescenceOptions.map((Fluorescence) => (
                      <MenuItem value={Fluorescence}>{Fluorescence}</MenuItem>
                    ))}
                  </Select>
                </div>
                <div>
                  {/* <InputLabel>lab</InputLabel> 
      <Select  style={{width:"5vi" , height:"2vi"}}
        onChange={(e) => {
          setProduct({ ...product, publicData:{...product.publicData,lab:e.target.value}  })
          }}
          >
             {LabOptions.map(lab=>(<MenuItem value={lab}>{lab}</MenuItem> ))}
      </Select> */}
                </div>
              </div>
              <br></br>
              <div>
                <button
                  className="addProduct"
                  onClick={() => addProduct(product)}
                >
                  add
                </button>
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
      </>
    );
  };
  