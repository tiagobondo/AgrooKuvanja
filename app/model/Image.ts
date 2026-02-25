import { Document, Schema, model } from "mongoose";
import { imgData } from "../../types";


const imgSchema = new Schema<imgData>({
    description: {
        type: String,
        required: true
    },

    path: {
        type: String,
        required: true
    },

    create_in: {
        type: String,
        required: true
    }
})

export const imgModel = model<imgData>("imagens", imgSchema);
