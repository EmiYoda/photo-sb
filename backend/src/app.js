import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { createRoles } from "./libs/initialSetup";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
createRoles();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
