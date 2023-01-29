import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';


export function buildLoaders(): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }
  const typeScriptLoader =
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

  return [cssLoader, typeScriptLoader,]
}