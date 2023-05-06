import { Schema, model } from "mongoose";
import { IBaseModel } from "./IBaseModel";

export interface IBusao extends IBaseModel {
    name: string;
    linha: string;
    direcao: number;
    userId: unknown;
}

const busSchema = new Schema<IBusao>(
    {
        name: {
            type: String,
            required: true,
        },
        linha: {
            type: String,
            required: true,
        },
        direcao: {
            type: Number,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "Users",
            required: true,
        },
    },
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

export const busModel = model<IBusao>("Busao", busSchema);
