import './Search.css';
import { Button_Section } from './button-section/Button-Section';
import love from '../../../assets/icons/product-icons/Like.svg';
import RedLove from '../../../assets/LikeRed.png';
import Forevrite from '../../../assets/forevrite.png'
import box from '../../../assets/icons/product-icons/box.svg';
import { sdk } from '../../../config/sharetribeSDK.config';
import { useEffect, useState } from 'react';
import { parse } from 'path';

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
]

export const Search: React.FC = () => {

    const [data, setData] = useState<Array<any>>([]);
    const [images, setImages] = useState<Array<any>>([]);
    const [Compares, setCompares] = useState<Array<string>>([]);
    const [favorites, setFavorites] = useState<Array<string>>([]);

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
       console.log("myCompares " + Compares)
    }, [Compares])

    useEffect(() => {
        console.log("favorites "+favorites)
        console.log("data "+data)
     }, [favorites,data])

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
    

    const CompareDiamonds = (id: string, key: number) => { 
        const index = Compares.findIndex((fav) => fav === id);
        if (index === -1) {
          // Object is not in Compares, add it
          setCompares([...Compares, id]);
        } else {
          // Object is already in Compares, remove it
          const newCompares = Compares.filter((fav) => fav !== id);
          setCompares(newCompares);
        }
    }

    const LovlyDiamonds = (id: string, key: number) => {
        debugger
    const d = data.findIndex((x)=>x.id.uuid === id)
    data[d].attributes.lovly = !data[d].attributes?.lovly;
    setData(data[d].attributes?.lovly);
        // setData(data.find(x => x.id.uuid == id ? x.attributes.lovly = !x.attributes.lovly : ""));
        // data.find(x => x.id.uuid == id && x.attributes.lovly == true ? setLovlyDiamonds(lovlyDiamonds.concat(id)) :
        //       lovlyDiamonds.findIndex(item => item == id ? setLovlyDiamonds(lovlyDiamonds.splice(parseInt(item))):""));
        const index = favorites.findIndex((fav) => fav === id);
        if (index === -1) {
          // Object is not in favorites, add it
          setFavorites([...favorites, id]);
        } else {
          // Object is already in favorites, remove it
          const newFavorites = favorites.filter((fav) => fav !== id);
          setFavorites(newFavorites);
        }

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
                                    <img key={i} className={listing?.attributes?.compare ? 'boxImg' : ''}
                                        src={box} onClick={() => CompareDiamonds(listing?.id?.uuid, i)} />
                                        <div className='blueButton'/>
                                    {/* <div className='blueButton' style={{backgroundColor:SideButton[diamond.sideButton]?.color, border:SideButton[diamond.sideButton]?.border }}> */}
                                    {/* <div className='blueButtomText' 
                                        style={{color:SideButton[diamond.sideButton]?.wordColor}} 
                                        >{SideButton[diamond.sideButton]?.word}</div> */}
                                    {/* </div> */}
                                </div>

                                {images.map((img: any) => {
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
                            </div>
                            <div className='bottomDiv'>
                                <div className='diamondName'>{`TOTAL PRICE $${listing?.attributes?.price?.amount} `}</div>
                                <img className='loveImg' src={listing?.attributes?.lovly ? Forevrite : love} onClick={() => LovlyDiamonds(listing?.id?.uuid, i)} />
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