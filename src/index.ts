import app from "./app";
import { Request, Response } from "express";

import estadisticaMatrizRoutes from "./routes/estadistica.route";

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo!");
});

app.use("/api/estadistica-factorizacion", estadisticaMatrizRoutes);
