import"./Button-Section.css";
import compare from"../assets/ButtonSection/compare.svg";
import view from"../assets/ButtonSection/view.svg";
import reset from"../assets/ButtonSection/reset.svg";
import sort from"../assets/ButtonSection/sort.svg";
import filter from"../assets/ButtonSection/filter.svg";

export const Button_Section: React.FC = () => {
    return(<>
    <div className="all">
        <div className="leftDiv">Top Ten</div>
        <div className="compare">
            <img src={compare} className="compareImg"/>
            Compare
        </div>
        <div className="view">
            <img src={view} className="viewImg"/>
            View
        </div>
        <div className="amongDiv"/>
        <div className="reset">
            <img src={reset} className="resetImg"/>
            Reset
        </div>
        <div className="sort">
            <img src={sort} className="sortImg"/>
            Sort
        </div>
        <div className="filter">
            <img src={filter} className="filterImg"/>
            Filter
        </div>

    </div>
    </>)
}