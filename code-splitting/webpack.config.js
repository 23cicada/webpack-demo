const { mergeWithCustomize, customizeObject, CustomizeRule } = require('webpack-merge')
const entryPoint = require('./entry-point/config')
const preventDuplication = require('./prevent-duplication/config')
const dynamicImport = require('./dynamic-import/config')
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