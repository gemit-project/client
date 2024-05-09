import { useEffect, useState } from "react";
import { sdk } from "../config/sharetribeSDK.config";
import { uploadImage } from "../utils/upload-img";
const { UUID, LatLng, Money } = require("sharetribe-flex-sdk").types;

export const AddProduct = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [user, setUser] = useState();
    const [fileId, setFileId] = useState("");

    const handleFileChange = (event: any) => {
      setSelectedFile(event.target.files[0]);
    };
    
    
  }