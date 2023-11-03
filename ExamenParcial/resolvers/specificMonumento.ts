import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/Monumento.ts";


const getSpecific = async(req:Request,res:Response) => {
    try{
        const id = req.params.id;
        const monumento = await MonumentoModel.findOne(id).exec();

        if (!monumento) {
            res.status(500).send("No se encontro\n");
            return;
        }
        res.status(200).send({
            id: monumento.id.toString(),
            name: monumento.name,
            pais: monumento.pais,
            postal: monumento.postal,
            ciudad: monumento.ciudad,
            continente: monumento.continente,
            hora: monumento.hora,
            weather: monumento.weather,
        });
    } catch (e) {
        res.status(500).send(e.message);
        return;
    
    }
}

export default getSpecific; 