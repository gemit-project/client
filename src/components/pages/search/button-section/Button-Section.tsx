import "./Button-Section.css";
import compare from "../../../../assets/ButtonSection/compare.svg";
import view from "../../../../assets/ButtonSection/view.svg";
import reset from "../../../../assets/ButtonSection/reset.svg";
import sort from "../../../../assets/ButtonSection/sort.svg";
import filter from "../../../../assets/ButtonSection/filter.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
interface ActionProps{
  handleCompareClick:()=>void;
}
export const Button_Section: React.FC<ActionProps> = ( {handleCompareClick }) => {
const navigation=useNavigate();

  return (
    <>
<div className="existFilter">No filter criteria were selected</div>
      <div className="all">
        <div className="leftDiv">Top Ten</div>
        <div className="compare">
          <img src={compare} className="compareImg" />
          <Link onClick={handleCompareClick} to={"/Search/Compare"} className="buttonsWord">
            {" "}
            Compare
          </Link>
          {/* <button onClick={()=>{navigation("/Compare")}}>Compare</button> */}
        </div>
        <div className="view">
          <img src={view} className="viewImg" />
          <Link to={"View"} className="buttonsWord">
            View
          </Link>
        </div>
        <div className="amongDiv" />
        <div className="reset">
          <img src={reset} className="resetImg" />
          <Link to="Reset" className="buttonsWord">
            Reset
          </Link>
        </div>
        <div className="sort">
          <img src={sort} className="sortImg" />
          <Link to="Sort" className="buttonsWord">
            Sort
          </Link>
        </div>
        <div className="filter">
          <img src={filter} className="filterImg" />
          <Link to="/Filter" className="buttonsWord">
            Filter
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
