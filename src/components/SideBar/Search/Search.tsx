import "./Search.css";
import { Button_Section } from "./Search/Button-Section";
import love from "../../../assets/icons/product-icons/Like.svg";
import RedLove from "../../../assets/LikeRed.png";
import box from "../../../assets/icons/product-icons/box.svg";
import diamond2 from "../../../assets/diamonds/2.svg";
import diamond3 from "../../../assets/diamonds/3.svg";
import diamond4 from "../../../assets/diamonds/4.svg";
import diamond5 from "../../../assets/diamonds/5.svg";
import diamond6 from "../../../assets/diamonds/6.svg";
import diamond7 from "../../../assets/diamonds/7.svg";
import { sdk } from "../../../config/sharetribeSDK.config";
import { useEffect, useState } from "react";

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
  const [myCompares, setMyCompares] = useState<Array<string>>([]);
  const [lovlyDiamonds, setLovlyDiamonds] = useState<Array<string>>([]);

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

  const myCompareDiamonds = (id: string, key: number) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id.uuid == id && data[i].attributes.compare == false) {
        //data[i].attributes.compare  == true;
        setMyCompares(myCompares.concat(id));
      } else {
        // data[i].attributes.compare  == false;
        // myCompares.find(x=>x==id ? setMyCompares(myCompares.splice(id.)) :"")
      }
    }
  };

  const myLovlyDiamonds = (id: string, key: number) => {
    data.find((x) =>
      x.id.uuid == id ? (x.attributes.lovly = !x.attributes.lovly) : ""
    );
    data.find((x) =>
      x.id.uuid == id && x.attributes.lovly == true
        ? setLovlyDiamonds(lovlyDiamonds.concat(id))
        : //  lovlyDiamonds.find(item => item == id ? setLovlyDiamonds(lovlyDiamonds.splice(item)))
          ""
    );
  };

  return (
    <>
      <Button_Section></Button_Section>
      <div className="scrollBar">
        <section className="section">
          <div className="allView">
            {data.map((listing: any, i: any) => (
              <div className="allDiv" key={i}>
                <div className="greyDiv">
                  <div className="among">
                    <img
                      key={i}
                      className={`${
                        listing?.attributes?.compare ? "boxImg" : ""
                      }`}
                      src={box}
                      onClick={() => myCompareDiamonds(listing?.id?.uuid, i)}
                    />
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
                    src={listing?.attributes?.lovly ? RedLove : love}
                    onClick={() => myLovlyDiamonds(listing?.id?.uuid, i)}
                  />
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
