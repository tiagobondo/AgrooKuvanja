import bcrypt from "bcrypt";
import { userModel } from "../model/User";

const saltRounds = 8
const date = new Date()
const dateNow = date.toLocaleDateString()

const save = async (email: string, password: string, rec_password: string) => {
    const passwordHash = bcrypt.hashSync(password, saltRounds);
    const recPasswordHash = bcrypt.hashSync(rec_password, saltRounds);

    const verifyData = await userModel.findOne({ email });

    if(verifyData == null){
        const data = new userModel({
            email,
            password: passwordHash,
            rec_password: recPasswordHash,
            create_in: dateNow
        })

        if(email == '' || rec_password == '' || password == ''){
            return 401;
        } else {
            if(password === rec_password){
                return 405;
            } else {
                const res = await data.save();
                return 200;  
            } 
        }
    } else {
        return 405;
    }

}

const login = async (email: string, password: string) => {
    const verifyData = await userModel.findOne({ email });

    if(verifyData == null){

    } else {
        
    }
}

export { save, login }