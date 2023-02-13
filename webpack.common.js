const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entries = {
    backgroundPage: path.join(__dirname, "src/backgroundPage.ts"),
    popup: path.join(__dirname, "src/popup/index.tsx"),
};

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash].chunk.js",
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(
                        __dirname,
                        "./node_modules/webextension-polyfill/dist/browser-polyfill.js",
                    ),
                    to: path.join(__dirname, "dist/js"),
                },
            ],
        }),
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
        new HtmlWebpackPlugin({
            scriptLoading: "blocking",
            chunks: ["popup"],
            filename: "popup.html",
            templateContent: `
    <html>
    <head>
      <title>Popup</title>
    </head>
      <body>
        <div id="popup"></div>
      </body>
    </html>`,
        }),
        new HtmlWebpackPlugin({
            scriptLoading: "blocking",
            chunks: ["vault"],
            filename: "vault.html",
            templateContent: `
    <html>
    <head>
      <title>Vault</title>
    </head>
      <body>
        <div id="vault"></div>
      </body>
    </html>`,
        }),
        new Dotenv(),
    ],
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@emotion", "macros"],
                    },
                },
            },
            {
                exclude: /node_modules/,
                test: /src\/content-script.*\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        configFile: path.join(
                            __dirname,
                            "src/content-script/tsconfig.json",
                        ),
                    },
                },
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
            },
        ],
    },
    // Setup @src path resolution for TypeScript files
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            react: path.resolve("./node_modules/react"),
            "@src": path.resolve(__dirname, "src/"),
        },
        fallback: {
            buffer: require.resolve("buffer"),
            stream: require.resolve("stream-browserify"),
        },
    },
};
