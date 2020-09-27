
/** 2020-9-27 代码分离: 入口起点 **/
// 如果入口chunk包含重复引用的模块，那这些重复的模块会被引入各个bundle中。
module.exports = {
    entry: {
        index: './index.js',
        another: './another.js'
    }
}