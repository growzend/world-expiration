// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: ["**/LICENSE"],
  root: "./src",
  buildOptions: {
    out: ".",
    metaUrlPath: "snowpack",
  },
};
