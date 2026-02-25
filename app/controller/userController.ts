import { Request, Response } from "express";
import { save } from "../service/userService";

const saveUser = async (req: Request, res: Response) => {
    const { 
        email,
        password,
        rec_password
     } = req.body;

     try {
         const response = await save(email, password, rec_password);

         if(response == 405){
            return res.status(405).send({ message: "Email existente!" })
         }

         if(response == 200){
            return res.status(200).send({ message: "Usuario cadastrado com sucesso!" })
         }

         if(response == 401){
            return res.status(401).send({ message: "Todos os campos são obrigatorios!" })
         }
     } catch (error) {
        return res
        .status(500)
        .send({ message: "Server internal error" }) 
     }
}

export { saveUser }