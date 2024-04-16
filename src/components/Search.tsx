import { Button_Section } from './Button-Section';
import love from "../assets/icons/product-icons/Like.svg";
import box from "../assets/icons/product-icons/box.svg";
import diamond2 from "../assets/diamonds/2.svg";
import diamond3 from "../assets/diamonds/3.svg";
import diamond4 from "../assets/diamonds/4.svg";
import diamond5 from "../assets/diamonds/5.svg";
import diamond6 from "../assets/diamonds/6.svg";
import diamond7 from "../assets/diamonds/7.svg";
import "./Search.css";

import { sdk } from '../config/sharetribeSDK.config'; //integrationSdk
import { useEffect, useState } from 'react';

const { UUID, LatLng, Money } = require("sharetribe-flex-sdk").types;


const Diamonds = [
  {
    dianomdImg: diamond6,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond2,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond3,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 0,
  },
  {
    dianomdImg: diamond4,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 2,
  },
  {
    dianomdImg: diamond5,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 2,
  },
  {
    dianomdImg: diamond6,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond7,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond2,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond6,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond2,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond3,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond4,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 0,
  },
  {
    dianomdImg: diamond5,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 2,
  },
  {
    dianomdImg: diamond6,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond7,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond2,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond5,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond6,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond7,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
  {
    dianomdImg: diamond2,
    diamondName: "TOTAL PRICE $3,455",
    sideButton: 1,
  },
];

const SideButton = [
  {
    color: "var(--main-blue, #00F)",
    word: "available",
    wordColor: "#FFFFFF",
    border: "",
  },
  {
    color: "var(--light-blue---general, #00B2FF)",
    word: "bussy",
    wordColor: "#FFFFFF",
    border: "",
  },
  {
    color: "",
    word: "sold",
    wordColor: "var(--main-blue, #00F)",
    border: " 1px solid var(--main-blue, #00F)",
  },
];

export const Search: React.FC = () => {

    const [data, setData] = useState<Array<any>>([]);
    const [images, setImages] = useState<Array<any>>([]);

    
    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        console.log('datat and im', data, images)
    },[data, images])

    var listingId = new UUID("6603113e-e43a-4797-8c80-83b36ade2700");
    const getData = () => {
    sdk.listings.query({include: ["images"],
    
    }).then((res:any) => {
        setData(res.data.data)
        setImages(res.data.included)
    }).catch((err:any)=> {
    });

    }

    
return(<>
<Button_Section></Button_Section>
<div className='scrollBar'>
<section className='section' >
 <div className='allView'>
  {/* {Diamonds.map((diamond,i) => (
  <div> */}
  {data.map((listing:any,i:any)=>(
    <div className='allDiv' key={i}>
      <div className="greyDiv">
         <div className='among'>
         <img className='boxImg' src={box}/>
         {/* <div className='blueButton' style={{backgroundColor:SideButton[diamond.sideButton]?.color, border:SideButton[diamond.sideButton]?.border }}> */}
          {/* <div className='blueButtomText' 
           style={{color:SideButton[diamond.sideButton]?.wordColor}} 
          >{SideButton[diamond.sideButton]?.word}</div> */}
         {/* </div> */}
         </div>

         {images.map((img:any) => {
                if (listing?.relationships?.images?.data[0]?.id?.uuid === img.id.uuid) {
                    return (
                        <img
                            key={img.id.uuid}
                            className='diamondImg'
                            src={img.attributes.variants.default.url}
                        />
                    );
                }
                return null;
            })}
         {/* {images && data && images.find((img:any)=>{
            return  listing?.relationships?.images?.data[0]?.id?.uuid == img?.id?.uuid 
            ?
         <img className='diamondImg' 
              src={img?.attributes?.variants?.default?.url}
         />
         : ""})} */}
      </div>
      <div className='bottomDiv'>
        <div className='diamondName'>{`TOTAL PRICE $${listing?.attributes?.price?.amount} `}</div>
        <img className='loveImg' src={love}/>
      </div>
    </div>
))}
{/* </div>
))} */}
</div>
</section>
</div>   
</>);
};
