const { mergeWithCustomize, customizeObject, CustomizeRule } = require('webpack-merge')
const prod = require('../webpack.prod')

const config = {
    context: __dirname,
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        output: CustomizeRule.Append
    })
})(prod, config)