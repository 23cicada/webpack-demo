
const path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'index.js'),
        another: path.resolve(__dirname, 'another.js')
    }
}