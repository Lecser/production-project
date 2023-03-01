import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { type BuildOptions } from './types/config';

export function buildPlugin({
  paths,
  isDev,
  analyze
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    analyze && new BundleAnalyzerPlugin({ openAnalyzer: false })
  ].filter(Boolean);
}
