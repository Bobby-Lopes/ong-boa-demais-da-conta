import { rename, rm } from "node:fs/promises";

await rename(
    "dist/html/index.html",
    "dist/index.html"
);

await rm("dist/html", {
    recursive: true,
    force: true
});

console.log("Build ajustado para publicação no GitHub Pages.");