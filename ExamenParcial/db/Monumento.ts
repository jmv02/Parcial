import mongoose from "npm:mongoose@7.6.3";
const Schema = mongoose.Schema;

const MonumentSchema = new Schema(
    {
        name: { type: String, required: true,unique:true},
        desc: { type: String, required: true},
        postal: { type: Number, required: true },
        ISO:{type:String,required:true},

    },
    { timestamps: true }
);

export type MonumentModelType = {
    name: string;
    desc:string; 
    postal:number;
    ciudad:string;
    pais:string; 
    continente:string;
    hora:string;
    weather:string;
    _id: mongoose.Types.ObjectId;
}

export default mongoose.model<MonumentModelType>("Monumento", MonumentSchema);