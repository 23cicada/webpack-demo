const path = require('path')

/** 2020-9-27 代码分离: 动态导入 **/
// import() 实现动态导入
module.exports = {
    entry: {
        index: path.resolve(__dirname, 'index.js')
    },
    output: {
        chunkFilename: '[name].bundle.js'
    }
}