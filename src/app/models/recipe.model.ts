import { Difficulty } from "./difficulty.model";

export interface Recipe {
    id: number;
    name: String;
    difficulty: Difficulty;
}