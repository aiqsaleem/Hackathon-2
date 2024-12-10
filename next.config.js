const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@public"] = path.join(__dirname, "public");
    return config;
  },
};
