import {Request, Response} from "npm:express@4.18.2"; 
import MonumentoModel from "../db/Monumento.ts";

const getMonumentos = async(req:Request,res:Response) => {
    try{
        const id = req.params.id; 
        const name = req.params.name; 
        const pais = req.params.pais; 
        const monumento = await MonumentoModel.findOne(id).findOne(name).findOne(pais).exec(); 

        if(!monumento){
            res.status(500).send("No se encontro\n"); 
            return; 
        }
        res.status(200).send({
            id:monumento.id.toString(),
            name:monumento.name,
            pais:monumento.pais,
        }); 
    }catch(e){
        res.status(500).send(e.message); 
        return; 
    }
}

export default getMonumentos; 