import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/Monumento.ts";


export const addMonumento = async (req: Request, res: Response) => {
  try {
      const { nombre,desc,postal,ISO} = req.body; 
    
    if (!nombre || !desc || !postal || !ISO) {
      res.status(500).send("Nombre, descripcion, codigo postal and ISO are required");
      return;
    }

    const alreadyExists = await MonumentoModel.findOne({postal}).findOne(nombre).exec();
    if (alreadyExists) {
      res.status(400).send("Monumento already exists");
      return;
    }

    const newMonument = new MonumentoModel({ name, desc, postal,ISO });
    await newMonument.save();

    res.status(200).send({
      name: newMonument.name,
      desc: newMonument.desc,
      postal:newMonument.postal,
      ISO:newMonument.pais,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};