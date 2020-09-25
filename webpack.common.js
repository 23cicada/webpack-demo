
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer')

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            generateStatsFile: false,
        })
    ]
}