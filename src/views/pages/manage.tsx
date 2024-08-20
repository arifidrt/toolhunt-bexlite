import { TemplateBase } from "../templates/templateBase";
import { Html } from "@elysiajs/html";
import { ToolCard } from "../components/toolCard";
import { ITool } from "../../types/entity";
import { main } from "bun";

export const Manage = ({ tools }: { tools: ITool[] }) => {
  return (
    <TemplateBase>
      <main class="space-y-12">
        {tools.map((tool) => {
          return (
            <main class="flex gap-4 items-center">
              <div class="space-y-2">
                <img src={`/public/images/${tool.id}/${tool.image}`} class="w-16 h-16 rounded-lg" />
                <div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <div class="flex gap-2">
                    {tool.isPublic == 0 ? (
                      <button class="w-fit" hx-patch={`/tools/${tool.id}/publish`}>
                        Publish
                      </button>
                    ) : (
                      <button class="w-fit" hx-patch={`/tools/${tool.id}/unpublish`}>
                        Unpublish
                      </button>
                    )}
                    {tool.verified === 0 ? <button class="w-fit">Verify</button> : <button class="w-fit">Unverify</button>}
                  </div>
                </div>
              </div>
            </main>
          );
        })}
      </main>
    </TemplateBase>
  );
};
