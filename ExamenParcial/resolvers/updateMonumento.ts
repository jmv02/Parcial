import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/Monumento.ts";


export const updateMonumento = async (req: Request, res: Response) => {
    try {
        const { nombre, desc, postal, ISO } = req.body;

        if (!nombre || !desc || !postal || !ISO) {
            res.status(500).send("Nombre, descripcion, codigo postal and ISO are required");
            return;
        }

        const updatedMonument = await MonumentoModel.findOneAndUpdate(
            { nombre },
            { desc,postal,ISO },
            { new: true }
        ).exec();
        
        if (!updatedMonument) {
            res.status(404).send("Monument not found");
            return;
        }

        const newMonument = new MonumentoModel({ name, desc, postal, ISO });
        await newMonument.save();

        res.status(200).send({
            name: updatedMonument.name,
            desc: updatedMonument.desc,
            postal: updatedMonument.postal,
            ISO: updatedMonument.pais,
        });
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};