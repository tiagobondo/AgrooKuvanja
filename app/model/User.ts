import { Document, Schema, model } from "mongoose";
import { userData } from "../../types";


const userSchema = new Schema<userData>({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    rec_password: {
        type: String,
        required: true
    },

    create_in: {
        type: String,
        required: true
    }
})

export const userModel = model<userData>("users", userSchema);
