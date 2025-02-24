var path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const addHandleBarsLoader = config => {
  // add handlebars-loader so that handlebars templates in
  // webpack-dev-server's served html files are parsed
  // (specifically the meta tags)
  config.module.rules.push({ test: /\.html$/, loader: 'html-loader' });
  return config;
}
module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      addHandleBarsLoader,
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
      // add an alias for "our" imports
      addWebpackAlias({
        '@iso/redux': path.resolve(__dirname, 'pages/redux'),
        '@iso/helpers': path.resolve(__dirname, 'pages/helpers'),
        '@iso/public': path.resolve(__dirname, 'public'),
      }),
    )(config, env)
  );
};
