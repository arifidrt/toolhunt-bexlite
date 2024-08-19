import { Context } from "elysia";
import { toolServices } from "../services/toolServices";
import { ITool } from "../types/entity";

export const appController = {
  handleCreateTool: ({ body }: Context) => {
    const { name, image, url, category, description } = body as ITool;

    const createTool = toolServices.createData({ name, description, image: (image as Blob).name, url, category });

    console.log(createTool);
  },
};
