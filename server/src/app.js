import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import siteRoutes from "./routes/siteRoutes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "OK", service: "rc-software-labs-api" });
});

app.use("/api", siteRoutes);

export default app;
