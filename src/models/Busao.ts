import { Schema, model } from "mongoose";
import { IBaseModel } from "./IBaseModel";

export interface IBusao extends IBaseModel {
    linha: string;
    name: string;
}

const busSchema = new Schema<IBusao>(
    {
        linha: {
            type: String,
            required: [true, "Insira a linha do busão"]
        },
        name: {
            type: String,
            required: [true, "Insira o nome do busão"],
        }
    }
)

export const busModel = model<IBusao>('Busao', busSchema);