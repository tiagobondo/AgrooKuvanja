import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connection_string = process.env.connection_string || ""
//Connection with DataBase
const connection = async () => {
    await mongoose.connect(`${connection_string}`)
    .then(() => {
        console.log("Connected!")
    }).catch((error)=>{
        console.log("Error with connection!")
    })
}

export {connection} 