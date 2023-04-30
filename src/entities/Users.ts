import { Schema, model } from "mongoose";
import { IBaseModel } from "./IBaseModel";

export interface IUser extends IBaseModel{
    // id: string;
    name: string;
    email: string;
    password: string;
    // createdAt: Date;
    // updatedAt: Date;
}

const userSchema = new Schema<IUser>(
{
    name: {
        type: String,
        required: [true, "Insira um nome"],
    },
    email: {
        type: String,
        required: [true, "Insira um email"],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Email não é valido"],
    },
    password: {
    type: String,
        required: [true, "Insira uma senha"],
            minlength: [6, "Senha precisa ser maior que 6 caracteres"],
    },
}
);

export const UserModel = model<IUser>('Users', userSchema);