import { Request, Response } from 'express';
import { save } from "../service/imgService";

const saveImg = async (req: Request, res:Response, )=> {
    const { description } = req.body;
    const pathArq = req.file?.filename;

    try {
        const response = await save(description, pathArq);

        if(response == 200){
            return res.status(200).send({ message: "Savo com sucesso!" })
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

export { saveImg } 

