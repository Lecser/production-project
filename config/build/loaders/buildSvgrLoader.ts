import webpack from 'webpack';

export const buildSvgrLoader = (): webpack.RuleSetRule => ({
  test: /\.svg$/,
  use: ['@svgr/webpack']
});
