import "./Search.css";
import { Button_Section } from "./button-section/Button-Section";
import love from "../../../assets/icons/product-icons/Like.svg";
import Favorite from "../../../assets/forevrite.png";
import box from "../../../assets/icons/product-icons/box.svg";
import { sdk } from "../../../config/sharetribeSDK.config";
import { useEffect, useState } from "react";

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
                  <div className="greyDiv">
                    <div className="among">
                      <img
                        key={i}
                        className={listing?.attributes?.compare ? "boxImg" : ""}
                        src={box}
                        alt="compareImg"
                        onClick={() => CompareDiamonds(listing?.id?.uuid, i)}
                      />
                      <div className="blueButton" />
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
))} */}
          </div>
        </section>
      </div>
      <Outlet></Outlet>
    </>
  );
};
