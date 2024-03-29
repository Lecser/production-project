import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { buildCSSLoader } from '../build/loaders/buildCSSLoader';
import { buildSvgrLoader } from '../build/loaders/buildSvgrLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  if (config.module?.rules) {
    config.module.rules = config?.module?.rules?.map((rule: RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
    config.module.rules.push(buildSvgrLoader(), buildCSSLoader(true));
  }
  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  config?.plugins?.push(
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(true),
      API: JSON.stringify('')
    })
  );
  return config;
};
