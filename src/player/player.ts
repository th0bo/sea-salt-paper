import { Card } from "../card/card.js";

export interface Player {
  hand: Card[];
  front: Card[];
}
