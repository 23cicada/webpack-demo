
/** 2020-9-27 代码分离: 防止重复 **/
// 1.dependOn: 默认情况，每个chunk包含了其引用过的模块，使用dependOn与其它chunk共享模块。
// 2.splitChunksPlugin: 将公用的依赖模块单独提取出来。

const dependOn = {
    entry: {
        index: { import: './config.js', dependOn: 'shared' },
        another: { import: './another.js', dependOn: 'shared' },
        shared: 'lodash'
    }
}

const splitChunksPlugin = {
    entry: {
        index: './config.js',
        another: './another.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}

module.exports = splitChunksPlugin