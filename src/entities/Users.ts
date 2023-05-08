import mongoose from "mongoose";
//import { IBaseModel } from "./IBaseModel";

export interface IUser {
    id?: string; // id opcional pq a tipagem do repository estava reclamando
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
            select: false
        },
        password: {
            type: String,
            required: true,
            minlength: [8, "Senha precisa ser maior que 8 caracteres"],
            select: false
        },
    },
    // {
    //     timestamps: true,
    //     versionKey: false,
    // }
    {
        toJSON: {
            transform: (_, ret): void => {
                delete ret.__v;
                // ret.id = ret._id.toString();
                // delete ret._id;
            },
        },
    },
);

export const UserModel = mongoose.model<IUser>("Users", userSchema);
