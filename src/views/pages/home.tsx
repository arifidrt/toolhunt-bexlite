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
          <input placeholder="search tools" class="w-72" />
        </section>
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-8" hx-get="/tools" hx-trigger="load"></section>
      </main>
    </TemplateBase>
  );
};
