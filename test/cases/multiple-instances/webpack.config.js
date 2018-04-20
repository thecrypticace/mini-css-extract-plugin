const Self = require('../../../');

const normalCSS = new Self({
  filename: '[name]-1.css',
})

const extraCSS = new Self({
  filename: '[name]-2.css',
})

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /-primary\.css$/,
        use: [
          normalCSS.loader,
          'css-loader',
        ],
      },
      {
        test: /-secondary\.css$/,
        use: [
          extraCSS.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    normalCSS,
    extraCSS,
  ],
};
