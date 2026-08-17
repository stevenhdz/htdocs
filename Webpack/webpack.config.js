const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'development', // or 'production'
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ],
    },
};