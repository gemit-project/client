import"./Button-Section.css";
import compare from"../../../assets/ButtonSection/compare.svg";
import view from"../../../assets/ButtonSection/view.svg";
import reset from"../../../assets/ButtonSection/reset.svg";
import sort from"../../../assets/ButtonSection/sort.svg";
import filter from"../../../assets/ButtonSection/filter.svg";
import { Link } from "react-router-dom";

export const Button_Section: React.FC = () => {
    return(<>
    <div className="all">
        <div className="leftDiv">Top Ten</div>
        <div className="compare">
            <img src={compare} className="compareImg"/>
           <Link to="/Compare" className="buttonsWord"> Compare</Link>
        </div>
        <div className="view">
            <img src={view} className="viewImg"/>
           <Link to="/View" className="buttonsWord">View</Link>
        </div>
        <div className="amongDiv"/>
        <div className="reset">
            <img src={reset} className="resetImg"/>
           <Link to="/Reset" className="buttonsWord" >Reset</Link>
        </div>
        <div className="sort">
            <img src={sort} className="sortImg"/>
             <Link to="/Sort" className="buttonsWord" >Sort</Link>
        </div>
        <div className="filter">
            <img src={filter} className="filterImg"/>
            <Link to="/Filter" className="buttonsWord">Filter</Link>
        </div>

    </div>
    </>)
}