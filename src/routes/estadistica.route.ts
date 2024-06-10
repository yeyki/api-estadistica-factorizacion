import { Router } from "express";
import * as controller from "../controllers/estadistica.controller";

const router: Router = Router();

router.route("/").post(controller.estadisticaMatriz);

export default router;