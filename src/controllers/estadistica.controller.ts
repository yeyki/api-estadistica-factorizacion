import { Request, Response } from "express";
import * as service from "../services/estadistica.service";

export async function estadisticaMatriz(req: Request, res: Response) {
  // const factorizacion: FactorizacionQR = req.body;

  service
    .estadisticaMatriz(req.body)
    .then((value) => {
      res.status(200).json(value);
    })
    .catch((error) => {
      res.status(400).json({ error: `${error}` });
    });
}
