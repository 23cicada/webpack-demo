const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./entry-point/config')
const prod = require('../webpack.prod')

module.exports = merge(prod, config, {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
})