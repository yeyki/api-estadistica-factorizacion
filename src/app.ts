import express from "express";
import { loggerRequest } from "./middleware";

// Settings
const app = express();
const PORT = 3100;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerRequest);

// Server listening
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
