import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { save, login } from "../service/userService";

dotenv.config()

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

const loginUser = async (req: Request, res: Response) => {
   const {
      email,
      password
   } = req.body;

   try {
     const response = await login(email, password); 

     if(response == 405){
      return res.status(405).send({ message: "Usuario nao encontrado!" })
     }

     if(response == 400){
      return res.status(405).send({ message: "Todos campos sao obrigatorios!" })
     }

     if(response == 200){
        const token = jwt.sign({ email }, process.env.JWT_SECRET!);
        return res.status(200).send({ token: token });

     }

     if(response == 401){
      return res.status(401).send({ message: "Senha incorrecta!" })
     }
   } catch (error) {
      return res
        .status(500)
        .send({ message: "Server internal error" }) 
   }
}

export { saveUser, loginUser }