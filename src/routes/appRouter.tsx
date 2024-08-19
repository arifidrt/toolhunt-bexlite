import { Elysia } from "elysia";
import { Home } from "../views/pages/home";
import { SubmissionForm } from "../views/pages/submissionForm";
import { appController } from "../controllers/appController";

export const appRouter = new Elysia()

  // interfaces
  .get("/", () => <Home />)
  .get("/tools", () => {})
  .get("/tools/manage", () => {})
  .get("/tools/submissions", () => <SubmissionForm />)

  // functionality
  .get("/tools/:id", () => {})
  .post("/tools/submissions", appController.handleCreateTool)
  .patch("/tools/:id", () => {});
