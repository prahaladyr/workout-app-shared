import { Synchronizable } from "./CommonTypes";

export interface IExercise extends Synchronizable {
    userId: string;
    name: string;
    category?: string;
    description?: string;
}