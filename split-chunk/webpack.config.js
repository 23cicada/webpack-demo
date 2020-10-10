const { mergeWithCustomize, customizeObject, CustomizeRule, merge } = require('webpack-merge')
const prod = require('../webpack.prod')

const config = {
    context: __dirname,
    entry: './index.js'
}

module.exports = merge(prod, config)