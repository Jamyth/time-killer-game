import path from "path";
import { ViteRunner } from "vite-runner";

new ViteRunner({
    port: 8080,
    https: false,
    rootDirectory: path.join(__dirname, ".."),
    tsconfigPath: path.join(__dirname, "../config/tsconfig.src.json"),
    useReact: true,
}).startServer();
