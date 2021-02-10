import { router as AuthRoutes } from "./routes/auth/auth.route";
import { Router } from "express";

export const apiV1: Router = Router();

apiV1.get("/", (req, res) => {
  res.json({ message: "VSChat API Version 1" });
});

apiV1.use("/auth", AuthRoutes);
