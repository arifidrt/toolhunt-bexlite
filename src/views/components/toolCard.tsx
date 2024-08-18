import { Html } from "@elysiajs/html";

export const ToolCard = () => {
  return (
    <main class="border-2 border-slate-900 hover:bg-slate-800 bg-slate-950 rounded-xl overflow-hidden transition duration-200">
      <div class="h-20 bg-slate-900/50 border-b border-slate-800" />
      {/* <img /> */}
      <div class="bg-slate-400 w-16 h-16 rounded-lg ml-6 -mt-10" />
      <div class="p-6 space-y-2">
        <h3>Tool name</h3>
        <p class="text-sm">Description</p>
      </div>
    </main>
  );
};
