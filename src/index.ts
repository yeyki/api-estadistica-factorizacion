import app from "./app";
import { Request, Response } from "express";

app.get('/', (req: Request, res: Response) => {
  res.send('Hola mundo!');
});

import estadisticaMatrizRoutes from "./routes/estadistica.route";

app.use("/api/estadistica-factorizacion", estadisticaMatrizRoutes);