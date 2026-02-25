import express, { Request, Response } from "express";
import { connection } from "../app/config/connection";
import { saveUser } from "../app/controller/userController";
import { saveImg } from "../app/controller/imgController";
import { upload } from '../app/config/multer';

const router = express.Router()
connection();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).send({ message: "Seja Bem-Vindo!" })
})

router.post('/usuario', saveUser);
router.post('/img',upload.single("photo") ,saveImg)

export default router;