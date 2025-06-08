import { Synchronizable } from "./CommonTypes";

export interface IUser extends Synchronizable {
    name: string;
    email: string;
    password: string;
}
