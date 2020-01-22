const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: config => {
    config.target = "electron-renderer";
    config.externals = config.externals || [{ sqlite3: "commonjs sqlite3" }];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000"
      }
    ];

    return config;
  }
});
