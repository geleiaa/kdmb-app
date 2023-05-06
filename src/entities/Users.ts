import mongoose from "mongoose";
import { IBaseModel } from "./IBaseModel";

export interface IUser {
    id?: string; // id opcional pqa tipagem do repository estava reclamando
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
        },
        password: {
            type: String,
            required: true,
            minlength: [8, "Senha precisa ser maior que 8 caracteres"],
        },
    },
    // {
    //     timestamps: true,
    //     versionKey: false,
    // }
    {
        toJSON: {
            transform: (_, ret): void => {
                // ret.id = ret._id.toString();
                // delete ret._id;
                delete ret.__v;
            },
        },
    },
);

export const UserModel = mongoose.model<IUser>("Users", userSchema);
