import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/Monumento.ts";


const deleteMonument = async (req: Request, res: Response) => {
    try {
        const id = req.params.id; 
        const person = await MonumentoModel.findOneAndDelete({ id }).exec();
        if (!person) {
            res.status(404).send("Monument not found");
            return;
        }
        res.status(200).send("Monument deleted");
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};

export default deleteMonument;