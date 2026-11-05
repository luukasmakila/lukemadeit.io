import { readdirSync, readFileSync, statSync } from "node:fs";
import { resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

/** Check exported routes and every root-relative HTML asset/link. */
export function verifyPages(output = "out", basePath = "") {
  const root = resolve(output);
  const errors = [];
  const required = ["index.html", "404.html"];
  for (const source of filesIn("src/app").filter((file) => file.endsWith(`${sep}page.tsx`))) {
    const route = relative(resolve("src/app"), resolve(source, ".."));
    required.push(route ? `${route}/index.html` : "index.html");
  }
  for (const file of new Set(required)) {
    try {
      if (!statSync(resolve(root, file)).isFile()) throw new Error("not a file");
    } catch {
      errors.push(`Missing exported route: ${file}`);
    }
  }
  const htmlFiles = filesIn(root).filter((file) => file.endsWith(".html"));
  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf8");
    for (const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
      const url = match[1];
      if (!url.startsWith("/") || url.startsWith("//")) continue;
      const pathname = new URL(url, "https://pages.example").pathname;
      if (basePath && pathname !== basePath && !pathname.startsWith(`${basePath}/`)) {
        errors.push(`${relative(root, file)}: URL misses base path: ${url}`);
        continue;
      }
      const localPath = decodeURIComponent(pathname.slice(basePath.length));
      const target = resolve(root, `.${localPath || "/"}`);
      if (target !== root && !target.startsWith(`${root}${sep}`)) {
        errors.push(`${relative(root, file)}: URL escapes export: ${url}`);
        continue;
      }
      try {
        const info = statSync(target);
        if (info.isDirectory() && !statSync(resolve(target, "index.html")).isFile()) {
          throw new Error("missing index");
        }
      } catch {
        errors.push(`${relative(root, file)}: URL has no exported file: ${url}`);
      }
    }
  }
  if (errors.length) throw new Error(errors.join("\n"));
  return htmlFiles.length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const count = verifyPages("out", process.env.NEXT_PUBLIC_BASE_PATH || "");
  console.log(`Verified ${count} exported HTML pages and their local URLs.`);
}
