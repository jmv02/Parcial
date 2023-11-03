import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import express, { Request, Response } from "npm:express@4.18.2";
import getMonumentos from "./resolvers/getMonumentos.ts";
import { addMonumento } from "./resolvers/addMonumento.ts";
import getSpecific from "./resolvers/specificMonumento.ts";
import deleteMonument from "./resolvers/deleteMonumento.ts";

const env = await load();


const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");
const PORT = env.PORT || Deno.env.get("PORT") || 3000;

if (!MONGO_URL) {
  console.error("You need to define MONGO_URL env");
  Deno.exit(1);
}
try {
  await mongoose.connect(MONGO_URL);
  console.info("Mongo connected");

  const app = express();
  app.use(express.json());




  app.get("/test", (req: Request, res: Response) => res.send("Working!"));

  app.get("/api/monumentos",getMonumentos); 
  app.post("/api/monumentos",addMonumento); 
  app.get("/api/monumentos/:id",getSpecific);
  app.put("/api/monumentos/:id:"); 
  app.delete(" /api/monumentos/:id",deleteMonument);

  app.listen(PORT, () => {
    console.log("Servidor empezado en puerto 3000")
  })

} catch (e) {
  console.error(e);
}
