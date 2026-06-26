import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const distDir = join(projectRoot, "dist");
const indexFile = join(distDir, "index.html");
const routes = ["privacy", "terms", "support", "download"];

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await copyFile(indexFile, join(routeDir, "index.html"));
  })
);
