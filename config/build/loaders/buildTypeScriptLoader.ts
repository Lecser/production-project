export const buildTypeScriptLoader = () => ({
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/
});
