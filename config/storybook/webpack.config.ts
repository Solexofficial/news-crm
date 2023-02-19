import path from 'path';
import { type Configuration, type RuleSetRule } from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module?.rules) {
    /* eslint-disable no-param-reassign */
    config.module.rules = config.module.rules.map((_rule) => {
      const rule = _rule as RuleSetRule;
      const ruleTest = rule.test as RegExp;

      if (ruleTest.test('.svg')) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        };
      }

      return rule;
    });
  }

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildScssLoader(true));

  return config;
};
