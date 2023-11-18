import { Card } from "../card/card.js";
import { Color } from "../card/color.js";
import { Type } from "../card/type.js";

export const getSuffledDeck = () =>
  [...cards].sort((a, b) => 0.5 - Math.random());

const cards: Card[] = [
  {
    color: Color.DarkBlue,
    type: Type.Crab,
  },
  {
    color: Color.DarkBlue,
    type: Type.Crab,
  },
  {
    color: Color.LightBlue,
    type: Type.Crab,
  },
  {
    color: Color.LightBlue,
    type: Type.Crab,
  },
  {
    color: Color.Black,
    type: Type.Crab,
  },
  {
    color: Color.Yellow,
    type: Type.Crab,
  },
  {
    color: Color.Yellow,
    type: Type.Crab,
  },
  {
    color: Color.LightGreen,
    type: Type.Crab,
  },
  {
    color: Color.LightGrey,
    type: Type.Crab,
  },
  {
    color: Color.DarkBlue,
    type: Type.Boat,
  },
  {
    color: Color.DarkBlue,
    type: Type.Boat,
  },
  {
    color: Color.LightBlue,
    type: Type.Boat,
  },
  {
    color: Color.LightBlue,
    type: Type.Boat,
  },
  {
    color: Color.Black,
    type: Type.Boat,
  },
  {
    color: Color.Black,
    type: Type.Boat,
  },
  {
    color: Color.Yellow,
    type: Type.Boat,
  },
  {
    color: Color.Yellow,
    type: Type.Boat,
  },
  {
    color: Color.DarkBlue,
    type: Type.Fish,
  },
  {
    color: Color.DarkBlue,
    type: Type.Fish,
  },
  {
    color: Color.LightBlue,
    type: Type.Fish,
  },
  {
    color: Color.Black,
    type: Type.Fish,
  },
  {
    color: Color.Black,
    type: Type.Fish,
  },
  {
    color: Color.Yellow,
    type: Type.Fish,
  },
  {
    color: Color.LightGreen,
    type: Type.Fish,
  },
  {
    color: Color.DarkBlue,
    type: Type.Swimmer,
  },
  {
    color: Color.LightBlue,
    type: Type.Swimmer,
  },
  {
    color: Color.Black,
    type: Type.Swimmer,
  },
  {
    color: Color.Yellow,
    type: Type.Swimmer,
  },
  {
    color: Color.LightOrange,
    type: Type.Swimmer,
  },
  {
    color: Color.DarkBlue,
    type: Type.Shark,
  },
  {
    color: Color.LightBlue,
    type: Type.Shark,
  },
  {
    color: Color.Black,
    type: Type.Shark,
  },
  {
    color: Color.LightGreen,
    type: Type.Shark,
  },
  {
    color: Color.Purple,
    type: Type.Shark,
  },
  {
    color: Color.White,
    type: Type.Mermaid,
  },
  {
    color: Color.White,
    type: Type.Mermaid,
  },
  {
    color: Color.White,
    type: Type.Mermaid,
  },
  {
    color: Color.White,
    type: Type.Mermaid,
  },
  {
    color: Color.DarkBlue,
    type: Type.Shell,
  },
  {
    color: Color.LightBlue,
    type: Type.Shell,
  },
  {
    color: Color.Black,
    type: Type.Shell,
  },
  {
    color: Color.Yellow,
    type: Type.Shell,
  },
  {
    color: Color.LightGreen,
    type: Type.Shell,
  },
  {
    color: Color.LightGrey,
    type: Type.Shell,
  },
  {
    color: Color.LightBlue,
    type: Type.Octopus,
  },
  {
    color: Color.Yellow,
    type: Type.Octopus,
  },
  {
    color: Color.LightGreen,
    type: Type.Octopus,
  },
  {
    color: Color.Purple,
    type: Type.Octopus,
  },
  {
    color: Color.LightGrey,
    type: Type.Octopus,
  },
  {
    color: Color.Purple,
    type: Type.Penguin,
  },
  {
    color: Color.LightOrange,
    type: Type.Penguin,
  },
  {
    color: Color.LightPink,
    type: Type.Penguin,
  },
  {
    color: Color.LightPink,
    type: Type.Sailor,
  },
  {
    color: Color.Orange,
    type: Type.Sailor,
  },
  {
    color: Color.Purple,
    type: Type.Lighthouse,
  },
  {
    color: Color.LightGrey,
    type: Type.Shoal,
  },
  {
    color: Color.LightGreen,
    type: Type.Colony,
  },
  {
    color: Color.LightOrange,
    type: Type.Captain,
  },
];
