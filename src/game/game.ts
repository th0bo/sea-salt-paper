import { Round, initRound } from "./round.js";

export const initGame = (playersCount: number) =>
  ({
    scoreBoard: Array.from<number>({ length: playersCount }).fill(0),
    currentRound: initRound(playersCount),
  } as Game);

export interface Game {
  scoreBoard: number[];
  currentRound: Round;
}
