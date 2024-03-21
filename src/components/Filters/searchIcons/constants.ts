import cusion from "./Shapes/cusion.svg";
import princess from "./Shapes/princes.svg";
import Asscher from "./Shapes/Asscher.svg";
import round from "./Shapes/round.svg";
import pear1 from "./Shapes/pear1.svg";
import oval from "./Shapes/oval.svg";
import Emerald from "./Shapes/Emerald.svg";
import heart from "./Shapes/heart.svg";
import radiant from "./Shapes/radiant.svg";
import marquise from "./Shapes/marquise.svg";


// interface DiamondsParemeters {
//   parametre: string;
//   icon: string;
// }

// export const parametres: DiamondsParemeters[] = [
//   { parametre: "cusion", icon: cusion },
//   { parametre: "princess", icon: princess },
//   { parametre: "princess", icon: princess },
//   { parametre: "princess", icon: princess },
//   { parametre: "princess", icon: princess },
//   { parametre: "princess", icon: princess },
//   { parametre: "princess", icon: princess },

// ];

export type IconCol = {

  param: string;
  icon: string;
};

export const IconsArr: IconCol[] = [
  {
    param: "round",
    icon: round
  },
  {
    param: "cusion",
    icon: cusion
  },
  {
    param: "princess",
    icon: princess
  },
  {
    param: "pear",
    icon: pear1
  },
  {
    param: "oval",
    icon: oval
  }, 
  {
    param: "asscher",
    icon: Asscher
  },
  {
    param: "emerald",
    icon: Emerald
  },
  {
    param: "heart",
    icon: heart
  },
  {
    param: "radiant",
    icon: radiant
  },
  {
    param: "marquise",
    icon: marquise
  }]

export const ClarityArr:string[]= [
  "FL","IF","VVS1","VVS2","VS1","VS2","SI1","SI2","SI3"
] 
