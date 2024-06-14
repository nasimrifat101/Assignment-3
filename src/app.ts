import express, { Application } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middlewears/globalErrorHandler";
import router from "./app/routes";
import { notFoundRoute } from "./app/middlewears/NotFound";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Application
app.use("/api", router);

app.use(globalErrorHandler);
app.use(notFoundRoute)

export default app;
