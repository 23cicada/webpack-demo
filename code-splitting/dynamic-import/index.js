
/** 2020-9-27 代码分离: 动态导入 **/
// import() 实现动态导入
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        chunkFilename: '[name].bundle.js'
    }
}