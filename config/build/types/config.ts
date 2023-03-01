export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyze: boolean;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
  analyze: boolean;
}
