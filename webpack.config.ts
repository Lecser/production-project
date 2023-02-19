import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { buildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: buildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const mode = env.mode || "development";
  const PORT = env.port;

  const isDev = mode === "development";

  return buildWebpackConfig({
    mode: mode,
    paths,
    port: PORT,
    isDev,
  });
};
