import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgrLoader } from '../build/loaders/buildSvgrLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push(buildSvgrLoader(), buildCssLoader(true));
  return config;
};
