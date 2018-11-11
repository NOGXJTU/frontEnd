// vue.config.js;
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader",
              options: {
                /* your options here */
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        vue: "vue/dist/vue.js",
        vue$: "vue/dist/vue.js"
      }
    }
  }
};
