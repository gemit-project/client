// import { Dashboard } from "../Dashboard";
import { useEffect, useState } from "react";
import * as React from "react";
import { sdk } from "../../../../config/sharetribeSDK.config";
import Pencil from "../../../../assets/Listing/Pencil.svg";
import "./Listing.css";
import { Frame1 } from "../Frame1/Frame1";
import { Frame2 } from "../Frame2/Frame2";

const labels = [
  { name: "#" },
  { name: "SHAPE" },
  { name: "CARAT" },
  { name: "COLOR" },
  { name: "CLARITY" },
  { name: "CUT" },
  { name: "POLISH" },
  { name: "SYMM." },
  { name: "FLOUR" },
  { name: "LAB" },
  { name: "$LIST" },
  { name: "$/CR" },
  { name: "DISCOUNT" },
  { name: "$TOTAL" },
  { name: "STATUS" },
  { name: "VIEWS" },
  { name: "CHATS" },
  { name: "BID" },
  { name: "TIME LEFT" },
  { name: "EDIT" },

  // { name:"EDIT" },
  // { name:"#" },
  // { name:"TITEL" },
  // { name:"DATE" },
  // { name:"STATUS" },
  // { name:"CURRENT PRICE" },
  // { name:"VIEWS" },
  // { name:"CHATS" },
  // { name:"BID" },
  // { name:"TIME LEFT" },
];

export const Listing: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [images, setImages] = useState<Array<any>>([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
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

  debugger;
  return (
    
    <>
      <div>
        <Frame1 />
        <Frame2/>
        <div className="scrollBarTable">
          <section className="section1">
            <table className="allTableView">
              <tr>
                {labels.map((label) => (
                  <th className="th">{label.name}</th>
                ))}
              </tr>
              {data.map((item) => (
                <tr>
                  <td className="td">?</td>
                  <td className="td">{item?.attributes?.publicData?.Shapes}</td>
                  <td className="td">?</td>
                  <td className="td">{item?.attributes?.publicData?.Color}</td>
                  <td className="td">{item?.attributes?.publicData?.Clarity}</td>
                  <td className="td">{item?.attributes?.publicData?.Cut}</td>
                  <td className="td">{item?.attributes?.publicData?.Polish}</td>
                  <td className="td">{item?.attributes?.publicData?.Symmetry}</td>
                  <td className="td">{item?.attributes?.publicData?.Fluorescence}</td>
                  <td className="td">{item?.attributes?.publicData?.Lab}</td>
                  <td className="td">?</td>
                  <td className="td">?</td>
                  <td className="td">?</td>
                  <td className="td">${item?.attributes?.price?.amount}</td>
                  <td className="td">?</td>
                  <td className="td">?</td>
                  <td className="td">?</td>
                  <td className="td">?</td>
                  <td className="td">?</td>
                  <td className="td">
                    <img className="pencilimg" src={Pencil} />
                  </td>
                </tr>
              ))}
            </table>
          </section>
        </div>
      </div>
    </>
  );
};
