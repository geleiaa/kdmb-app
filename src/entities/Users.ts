import mongoose from "mongoose";
import { IBaseModel } from "./IBaseModel";

export interface IUser extends IBaseModel {
    name: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            //match: [/\S+@\S+\.\S+/, "Email não é valido"],
        },
        password: {
            type: String,
            required: true,
            minlength: [6, "Senha precisa ser maior que 6 caracteres"],
        },
    }
    // {
    //     toJSON: {
    //         transform: (_, ret): void => {
    //             ret.id = ret._id.toString();
    //             delete ret._id;
    //             delete ret.__v;
    //         },
    //     },

);

export const UserModel = mongoose.model<IUser>('Users', userSchema);