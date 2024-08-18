import { Html } from "@elysiajs/html";
import { html } from "@elysiajs/html";

export const TemplateBase = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Toolhunt - find good tools, brodi!</title>
        <link href="/public/globals.css" rel="stylesheet" />
        <script src="https://unpkg.com/htmx.org@2.0.2"></script>
      </head>
      <body>
        <main class="max-w-4xl m-auto mt-12">{children}</main>
      </body>
    </html>
  );
};
