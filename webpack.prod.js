const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: false,
        runtimeChunk: true,
        splitChunks: {
            chunks: "all",
            minChunks: 4,
            maxSize: 3500000,
        },
    },
});
