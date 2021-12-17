const nrwlConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config, ctx) => {
  nrwlConfig(config);

  return {
    ...config,
  /* module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$|\.scss$|\.sass$|\.less$|\.style$/,
          use: [
            {
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    }, */
  };
};
