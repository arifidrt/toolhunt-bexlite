import { TemplateBase } from "../templates/templateBase";
import { Html } from "@elysiajs/html";
import { ToolCard } from "../components/toolCard";

export const Home = () => {
  return (
    <TemplateBase>
      <main class="space-y-12">
        <header class="flex justify-between items-center">
          <a href="">toolhunt.</a>
          <a href="">
            <button>Submit tools</button>
          </a>
        </header>

        <section class="flex flex-col items-center justify-center gap-6">
          <div>Introducing Toolhunt</div>
          <h1 class="lg:px-32 text-center">Discover the beneficial tools for your development</h1>
          <p>High quality devtools and resources that help you ship faster</p>
          <input name="q" placeholder="search tools" class="w-72" hx-post="/tools" hx-target="#tools" hx-trigger="keyup delay:500ms" />
        </section>
        <section id="tools" class="grid grid-cols-1 lg:grid-cols-3 gap-8" hx-post="/tools" hx-trigger="load" hx-swap="transition:true"></section>
      </main>
    </TemplateBase>
  );
};
