import "./Search.css";
import { Button_Section } from "./button-section/Button-Section";
import love from "../../../assets/icons/product-icons/Like.svg";
import Favorite from "../../../assets/forevrite.png";
import box from "../../../assets/icons/product-icons/box.svg";
import { sdk } from "../../../config/sharetribeSDK.config";
import { useEffect, useState } from "react";
import './Search.css';
import RedLove from '../../../assets/LikeRed.png';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentDaimond } from '../../../app/slices/DaimondSlice';

const { UUID, LatLng, Money } = require("sharetribe-flex-sdk").types;
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
  const [Compares, setCompares] = useState<Array<string>>([]);
  const [favorites, setFavorites] = useState<Array<string>>([]);
const dispatch=useDispatch();
    const [myCompares, setMyCompares] = useState<Array<string>>([]);
    const [lovlyDiamonds, setLovlyDiamonds] = useState<Array<string>>([]);
    const navigate=useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    sdk.listings
      .query({
        include: ["images"],
      })
      .then((res: any) => {
        setData(
          res.data.data.map((x: any) => {
            return {
              ...x,
              attributes: { ...x.attributes, lovly: false, compare: false },
            };
          })
        );
        setImages(res.data.included);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const CompareDiamonds = (id: string, key: number) => {
    const newData = [...data];
    const ind = newData.findIndex((x) => x.id.uuid === id);
    if (ind !== -1) {
      newData[ind] = {
        ...newData[ind],
        attributes: {
          ...newData[ind].attributes,
          compare: !newData[ind].attributes?.compare,
        },
      };
      setData(newData);
    }

    const index = Compares.findIndex((fav) => fav === id);
    if (index === -1) {
      setCompares([...Compares, id]);
    } else {
      const newCompares = Compares.filter((fav) => fav !== id);
      setCompares(newCompares);
    }
  };

  const LovlyDiamonds = (id: string) => {
    const newData = [...data];
    const ind = newData.findIndex((x) => x.id.uuid === id);
    if (ind !== -1) {
      newData[ind] = {
        ...newData[ind],
        attributes: {
          ...newData[ind].attributes,
          lovly: !newData[ind].attributes?.lovly,
        },
      };
      setData(newData);
    }
    const index = favorites.findIndex((fav) => fav === id);
    if (index === -1) {
      setFavorites([...favorites, id]);
    } else {
      const newFavorites = favorites.filter((fav) => fav !== id);
      setFavorites(newFavorites);
    }
  };

  return (
    <>
      <Button_Section></Button_Section>
      <div className="scrollBar">
        <section className="section">
          <div className="allView">
            {data &&
              data.length > 0 &&
              data.map((listing: any, i: any) => (
                <div className="allDiv" key={i}>
                  <div className="greyDiv"
                        onClick={() =>{dispatch(setCurrentDaimond(listing));navigate("/Product")}}
                  
                  >
                    <div className="among">
                      <img
                        key={i}
                        className={listing?.attributes?.compare ? "boxImg" : ""}
                        src={box}
                        alt="compareImg"
                        onClick={() =>{ CompareDiamonds(listing?.id?.uuid, i);}}
                      />
                      <div className="blueButton" />
                                                                        {/* <div className='blueButton' style={{backgroundColor:SideButton[diamond.sideButton]?.color, border:SideButton[diamond.sideButton]?.border }}> */}
                                                                        {/* <div className='blueButtomText' 
                                                        const getData = () => {
                                                            sdk.listings.query({
                                                                include: ["images"],
                                                            }).then((res: any) => {
                                                                setData(res.data.data.map((x: any) => {
                                                                    return {
                                                                        ...x, attributes: { ...x.attributes, lovly: false, compare: false }
                                                                    }
                                                                }))
                                                                setImages(res.data.included)
                                                            }).catch((err: any) => {
                                                                console.log(err)
                                                            });
                                                        }

                                                        const myCompareDiamonds = (id: string, key: number) => {
                                                            for (let i = 0; i < data.length; i++) {
                                                                if (data[i].id.uuid == id && data[i].attributes.compare == false) {
                                                                    data[i].attributes.compare = true;
                                                                    setMyCompares(myCompares.concat(id));
                                                                }
                                                                else {
                                                                    data[i].attributes.compare = false;
                                                                    // myCompares.find(x=>x==id ? setMyCompares(myCompares.splice(id.)) :"")
                                                                }
                                                            }
                                                        }

                                                        const myLovlyDiamonds = (id: string, key: number) => {
                                                            data.find(x => x.id.uuid == id ? x.attributes.lovly = !x.attributes.lovly : "");
                                                            data.find(x => x.id.uuid == id && x.attributes.lovly == true ? setLovlyDiamonds(lovlyDiamonds.concat(id)) :
                                                                //  lovlyDiamonds.find(item => item == id ? setLovlyDiamonds(lovlyDiamonds.splice(item)))
                                                                "");
                                                        }

                                                        return (<>
                                                            <Button_Section></Button_Section>
                                                            <div className='scrollBar'>
                                                                <section className='section' >
                                                                    <div className='allView'>
                                                                        {data.map((listing: any, i: any) => (
                                                                            <div className='allDiv' key={i}>
                                                                                <div className="greyDiv">
                                                                                    <div className='among'>
                                                                                        <img key={i} className={`${listing?.attributes?.compare ? 'boxImg' : ''}`}
                                                                                            src={box} onClick={() =>{ myCompareDiamonds(listing?.id?.uuid, i)}} />
                                                                                        {/* <div className='blueButton' style={{backgroundColor:SideButton[diamond.sideButton]?.color, border:SideButton[diamond.sideButton]?.border }}> */}
                                                                                        {/* <div className='blueButtomText' 
                                                                                            style={{color:SideButton[diamond.sideButton]?.wordColor}} 
                                                                                            >{SideButton[diamond.sideButton]?.word}</div> */}
                                                                        {/* </div> */}
                    </div>

                    {images.map((img: any) => {
                      if (
                        listing?.relationships?.images?.data[0]?.id?.uuid ===
                        img.id.uuid
                      ) {
                        return (
                          <img
                            key={img.id.uuid}
                            className="diamondImg"
                            src={img.attributes.variants.default.url}
                            alt="diamondImg"
                            
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                  <div className="bottomDiv">
                    <div className="diamondName">{`TOTAL PRICE $${listing?.attributes?.price?.amount} `}</div>
                    <img
                      className="loveImg"
                      src={listing?.attributes?.lovly ? Favorite : love}
                      onClick={() => LovlyDiamonds(listing?.id?.uuid)}
                      alt="forevriteImg"
                    />
                  </div>
                </div>
              ))}
            {/* </div>
                                {images.map((img: any) => {
                                    if (listing?.relationships?.images?.data[0]?.id?.uuid === img.id.uuid) {
                                        return (
                                            <img
                                                key={img.id.uuid}
                                                className='diamondImg'
                                                src={img.attributes.variants.default.url}
                                                onClick={(e)=>{dispatch(setCurrentDaimond(listing));navigate(`/Product`)}}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                            <div className='bottomDiv'>
                                <div className='diamondName'>{`TOTAL PRICE $${listing?.attributes?.price?.amount} `}</div>
                                <img className='loveImg' src={listing?.attributes?.lovly ? RedLove : love} onClick={() => myLovlyDiamonds(listing?.id?.uuid, i)} />
                            </div>
                        </div>
                    ))}
                    {/* </div>
))} */}
          </div>
        </section>
      </div>
    </>
  );
};
