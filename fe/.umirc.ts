import postCssPxToViewport from "postcss-px-to-viewport"
export default {
  npmClient: 'pnpm',
  title: 'chat-fe',
  history: {
    type: 'hash',
  },
  hash: true,
  proxy: {
    "/api": {
      "target": "http://127.0.0.1:7001",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "/api" }
    }
  },
  extraBabelPlugins:["@babel/plugin-transform-flow-strip-types"],
  extraPostCSSPlugins: [  postCssPxToViewport({viewportWidth: 750})]
};
