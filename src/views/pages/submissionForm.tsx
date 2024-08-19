import { TemplateBase } from "../templates/templateBase";
import { Html } from "@elysiajs/html";
import { ToolCard } from "../components/toolCard";

export const SubmissionForm = () => {
  return (
    <TemplateBase>
      <main class="space-y-12">
        <header class="flex justify-between items-center">
          <a href="">toolhunt.</a>
        </header>
        <section class="flex flex-col items-center justify-center gap-6">
          <h1 class="lg:px-32 text-center">Share your tools</h1>
          <p>We will verify and add your tools</p>
        </section>
        <form class="w-[350px] m-auto space-y-2" hx-post="/tools/submissions" hx-encoding="multipart/form-data">
          <input name="name" placeholder="name" />
          <input name="image" type="file" />
          <input name="url" placeholder="url" />
          <select name="category">
            <option value="open-sources">Open Sources</option>
            <option value="free">Free</option>
            <option value="freemiun">Freemium</option>
            <option value="premium">Premium</option>
          </select>
          <textarea name="description" rows="5" placeholder="description" />
          <button>Submit</button>
        </form>
      </main>
    </TemplateBase>
  );
};
