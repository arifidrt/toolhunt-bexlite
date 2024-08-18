import { Elysia } from "elysia";
import { Home } from "../views/pages/home";

export const appRouter = new Elysia()

  // interfaces
  .get("/", () => <Home />)
  .get("/tools", () => {})
  .get("/tools/manage", () => {})
  .get("/tools/submissions", () => {})

  // functionality
  .get("/tools/:id", () => {})
  .post("/tools", () => {})
  .patch("/tools/:id", () => {});
