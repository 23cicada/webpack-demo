const { mergeWithCustomize, customizeObject, CustomizeRule } = require('webpack-merge')
const entryPoint = require('./entry-point')
const preventDuplication = require('./prevent-duplication')
const dynamicImport = require('./dynamic-import')
const prod = require('../webpack.prod')

module.exports = mergeWithCustomize(
    {
        customizeObject: customizeObject({
            output: CustomizeRule.Append
        })
    }
)(prod, dynamicImport, {
    context: __dirname
})