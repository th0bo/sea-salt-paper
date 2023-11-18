import { Card } from "../card/card.js";
import { getSuffledDeck } from './deck.js';
import { Player } from "../player/player.js";

export interface Round {
  deck: Card[];
  leftDiscard: Card[];
  rightDiscard: Card[];
  players: Player[];
}

export const initRound = (playersCount: number) => {
  const deck = getSuffledDeck();
  const leftDiscard = [deck.pop() as Card];
  const rightDiscard = [deck.pop() as Card];
  const players: Player[] = Array.from({ length: playersCount }).map(() => ({
    hand: [],
    front: [],
  }));

  return { deck, leftDiscard, rightDiscard, players } as Round;
};
