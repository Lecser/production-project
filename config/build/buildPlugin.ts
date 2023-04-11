import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { type BuildOptions } from './types/config';

export function buildPlugin({
  paths,
  isDev,
  analyze,
  apiUrl
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API: JSON.stringify(apiUrl)
    })
  ];

  if (isDev) plugins.push(new ReactRefreshWebpackPlugin());
  if (analyze) {
    // @ts-ignore
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }
  return plugins;
}
