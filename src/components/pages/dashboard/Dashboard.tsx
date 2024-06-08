import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import Pas from "../../../assets/Pas.svg";
import circle from "../../icons/imag.svg";
import { Listing } from "./listing/Listing";

const dashboardRouting = [
    {
        name: "Overview"
    },
    {
        name: "Listing"
    },
    {
        name: "Sales"
    },
    {
        name: "Ordres"
    },
    {
        name: "Revenue"
    },
    {
        name: "Traffic"
    },


]

const myDetials = [
    {
        name: "Unread Chat Messages"
    },
    {
        name: "Orders (7 days)"
    },
    {
        name: "Sales (7 days)"
    },
    {
        name: "Revenue (7 days)"
    },
    {
        name: "CTR (7 days)"
    },
]
const numChats = 10;

export const Dashboard = () => {
    return (<>

        <div className="mainDiv">
            {dashboardRouting.map((item, i) =>
                < >
                    <Link key={i} to={item.name} className="word">{item.name}</Link>
                    <img src={Pas}></img>
                </>)
            }
            <Link to={"/Sort"} className="chat">Chats Messages({numChats})</Link>
        </div>
        <div className="underDiv">
            {myDetials.map(d =>
                <div className="one">
                    <div className="labels">{d.name}</div>
                    <div className="fromShartribe">10</div>
                </div>
            )}
        </div>
        <Outlet></Outlet>
    </>)
}
