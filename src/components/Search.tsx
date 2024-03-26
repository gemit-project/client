import'./Search.css';
import love from'../assets/Like.svg';
import box from'../assets/box.svg';
import diamond1 from '../assets/diamonds/1.svg';
import diamond2 from '../assets/diamonds/2.svg';
import diamond3 from '../assets/diamonds/3.svg';
import diamond4 from '../assets/diamonds/4.svg';
import diamond5 from '../assets/diamonds/5.svg';
import diamond6 from '../assets/diamonds/6.svg';
import diamond7 from '../assets/diamonds/7.svg';

const Diamonds =[
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
        sideButton:0,
    },
    {
        dianomdImg: diamond5,
        diamondName: "TOTAL PRICE $3,455",
        sideButton:2,
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

const SideButton=[
    {
        color: "var(--main-blue, #00F)",
        word: "available",
        wordColor:"#FFFFFF",
        border:"",
    },
    {
        color: "var(--light-blue---general, #00B2FF)",
        word: "bussy",
        wordColor:"#FFFFFF", 
        border:"",
    },
    {
        color: "",
        word: "sold",
        wordColor:"var(--main-blue, #00F)", 
        border:" 1px solid var(--main-blue, #00F)",
    },
]

export const Search: React.FC = () => {
    return(<>
<div className='allView'>
  {Diamonds.map((diamond,i) => (
    <div className='allDiv' key={i}>
      <div className="greyDiv">
         <div className='among'>
         <img className='boxImg' src={box}/>
         <div className='blueButton' style={{backgroundColor:SideButton[diamond.sideButton]?.color, border:SideButton[diamond.sideButton]?.border }}>
          <div className='blueButtomText' 
           style={{color:SideButton[diamond.sideButton]?.wordColor}} 
          >{SideButton[diamond.sideButton]?.word}</div>
         </div>
         </div>
         <img className='diamondImg' src={diamond.dianomdImg}/>
      </div>
      <div className='bottomDiv'>
        <div className='diamondName'>{diamond.diamondName}</div>
        <img className='loveImg' src={love}/>
      </div>
    </div>
  ))};
</div>   
    </>) ;
};