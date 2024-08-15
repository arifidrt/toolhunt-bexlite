import html, { HtmlOptions } from "@elysiajs/html";

export const TemplateBase = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Toolhunt - find good tools, brodi!</title>
        <link rel="stylesheet" href="/public/globals.css" />
        <script src="https://unpkg.com/htmx.org@2.0.2"></script>
      </head>
      <body>{children}</body>
    </html>
  );
};
