import { createId } from "@paralleldrive/cuid2";
import { client } from "../models/client";
import { ITool } from "../types/entity";

export const toolServices = {
  getData: () => {
    const allTools = client
      .query(
        `
            SELECT 
            t.id AS id,
            t.name AS name,
            t.description AS description,
            t.image AS image,
            t.url AS url,
            a.visits AS visits
            FROM
            tools t
            JOIN
            analytics a on a.tool_id  = t.id
            `
      )
      .all() as ITool[];
    return allTools;
  },

  createData: ({ name, description, image, url, category }: Omit<ITool, "id" | "visits" | "verified" | "is_public">) => {
    const toolId = createId();
    const analyticId = createId();

    client
      .query(
        `
        INSERT INTO tools (id, name, description, image, url, category) VALUES (?,?,?,?,?,?)
        `
      )
      .run(toolId, name, description, image, url, category);
    client
      .query(
        `
        INSERT INTO analytics (id, tool_id) VALUES (?,?)
        `
      )
      .run(analyticId, toolId);
    const currentTool = client
      .query(
        `
            SELECT 
            t.id AS id,
            t.name AS name,
            t.description AS description,
            t.image AS image,
            t.url AS url,
            a.visits AS visits
            FROM
            tools t
            JOIN
            analytics a on a.tool_id  = t.id
            WHERE
            t.id = ?
            `
      )
      .all(toolId) as ITool[];
    return currentTool[0];
  },
};
