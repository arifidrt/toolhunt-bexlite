import { Context } from "elysia";
import { toolServices } from "../services/toolServices";
import { ITool } from "../types/entity";

export const appController = {
  handleCreateTool: ({ body }: Context) => {
    const { name, image, url, category, description } = body as ITool;

    if (!name || !image || !url || !category || !description) {
      return <div class="msg-error">All fields are required!</div>;
    }
    try {
      toolServices.createData({ name, description, image: (image as Blob).name, url, category });
      return new Response(null, {
        headers: {
          "HX-Redirect": "/",
        },
      });
    } catch (error) {
      return <div>Something went wrong!</div>;
    }
  },
};
