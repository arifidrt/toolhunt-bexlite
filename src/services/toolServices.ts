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
};
