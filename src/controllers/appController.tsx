import { Context } from "elysia";
import { toolServices } from "../services/toolServices";
import { ITool } from "../types/entity";
import { ToolCard } from "../views/components/toolCard";
import { Manage } from "../views/pages/manage";

export const appController = {
  handleGetTools: ({ body }: Context) => {
    try {
      const { q } = body as { q: string };
      const allTools = toolServices.getData(q);

      return (
        <>
          {allTools.map((tool) => {
            return <ToolCard {...tool} />;
          })}
        </>
      );
    } catch (error) {
      return <div class="msg-error">Something went wrong!</div>;
    }
  },

  handleCreateTool: async ({ body }: Context) => {
    const { name, image, url, category, description } = body as ITool;

    if (!name || !image || !url || !category || !description) {
      return <div class="msg-error">All fields are required!</div>;
    }
    try {
      const tool = toolServices.createData({ name, description, image: (image as Blob).name, url, category });

      await Bun.write(`./public/images/${tool.id}/${tool.image}`, image as Blob);

      return new Response(null, {
        headers: {
          "HX-Redirect": "/",
        },
      });
    } catch (error) {
      return <div class="msg-error">Something went wrong!</div>;
    }
  },

  handleManageTool: () => {
    const allTools = toolServices.getData();

    return <Manage tools={allTools} />;
  },
};
