const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    publicPath: './',
    outputDir: './dist',
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
            .set('config', resolve('src/config'))
            .set('common', resolve('src/components/common'))
            .set('static', resolve('src/static'));
    },
    configureWebpack: {
        performance: {
            hints: 'warning',
            // 入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: false
    }
};
