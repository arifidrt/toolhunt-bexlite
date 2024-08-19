import { Html } from "@elysiajs/html";
import { ITool } from "../../types/entity";

export const ToolCard = ({ id, name, description, image, visits }: ITool) => {
  return (
    <main class="border-2 border-slate-900 hover:bg-slate-800 bg-slate-950 rounded-xl overflow-hidden transition duration-200">
      <div class="h-20 bg-slate-900/50 border-b border-slate-800" />
      <img src={`./public/images/${id}/${image}`} class="w-16 h-16 rounded-lg ml-6 -mt-10" />
      {/* <div class="bg-slate-400 w-16 h-16 rounded-lg ml-6 -mt-10" /> */}
      <div class="p-6 space-y-2">
        <h3>{name}</h3>
        <p class="text-sm">{description}</p>
        <p class="text-sm">{visits}visits</p>
      </div>
    </main>
  );
};
