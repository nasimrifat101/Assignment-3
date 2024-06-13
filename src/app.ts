import express, { Application } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middlewears/globalErrorHandler";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Application
app.use("/api", router);

app.use(globalErrorHandler);

export default app;
