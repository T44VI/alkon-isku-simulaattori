export interface Drink {
  name: string;
  amount: number;
  strength: number;
  id: string;
}

export type Drinklist = Record<string, Drink>;

export interface Result {
  name: string;
  drinkIds: string[];
}

export interface ScoreboardScore {
  name: string;
  annokset: number;
  litrat: number;
  tuotteet: number;
}

export interface Scoreboard {
  litrat: number;
  annokset: number;
  tuotteet: number;
  top: ScoreboardScore[];
  topJuomat: { id: string; amount: number }[];
  last: { name: string; drinkIds: string[] };
}
