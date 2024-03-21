import cusion from "./icons/cusion.svg";
import princess from "./icons/princes.svg";
import Asscher from "./icons/Asscher.svg";
import round from "./icons/round.svg";
import pear1 from "./icons/pear1.svg";
import oval from "./icons/oval.svg";
import Emerald from "./icons/Emerald.svg";
import heart from "./icons/heart.svg";
import radiant from "./icons/radiant.svg";
import marquise from "./icons/marquise.svg";



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
