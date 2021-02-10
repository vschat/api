import { Router } from "express";

export const apiV1: Router = Router();

apiV1.get("/", (req, res) => {
  res.json({ message: "VSChat API Version 1" });
});
