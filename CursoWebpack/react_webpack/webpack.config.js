const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = (env, argv) => {
    const { mode } = argv
    const isProduction = mode === "production"

    return {
        // entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: isProduction ? "[name].[contenthash].js" : "main.js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: "src/index.html",
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                            "@babel/preset-react",
                            {
                                runtime: "automatic",
                            }
                        ]
                    ],
                    },
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        devServer: {
            open: true, //abrir navegador
            port: 3000,
            compress: true
        },
        devtool: "source-map"
    }
}