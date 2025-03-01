module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./", // adjust this if your source code is in a subdirectory
          },
        },
      ],
    ],
  };
};
