import { ObjectId, Types } from "mongoose";
import { Synchronizable } from "./CommonTypes";

export interface IWorkoutExercise extends Synchronizable {
    exerciseId: string;
    sets: number;
    reps: number;
    weight?: number;
    comment?: string;
}


export interface IWorkoutSession extends Synchronizable {
    userId: string;
    title: string;
    description?: string;
    exercises: IWorkoutExercise[];
}