/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-09-17 10:12:38
*/
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const config = require('./src/config/index');

let page;

const configureWebpack = {
    resolve: {
        alias: Object.assign({
            'src': path.join(__dirname, 'src')
        }, page.alias || {})
    },
    externals: Object.assign({
        'FastClick': 'FastClick',
        'html2canvas': 'html2canvas'
    }, page.externals || {}),
    plugins: page.plugins || [],
    // 关闭压缩功能
    optimization: {
        minimize: false
    }
};

if (process.env.NODE_ENV === 'production') {
    configureWebpack.externals.vue = 'Vue';
    configureWebpack.externals['vue-router'] = 'VueRouter';
    configureWebpack.externals.vuex = 'Vuex';
}

module.exports = {
    publicPath: page.publicPath,
    assetsDir: 'static',
    outputDir: page.outputDir,
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: process.env.NODE_ENV !== 'production',
    pages: {
        index: {
            filename: 'index.html',
            entry: page.entry,
            template: page.template,
            title: page.title,
            hmid: config.BAIDU_TONGJI
        }
    },
    devServer: {
        disableHostCheck: true,
        port: page.port,
        publicPath: '/',
        historyApiFallback: true
    },
    configureWebpack: configureWebpack,
    chainWebpack: config => {
        config.plugins.delete('preload-index');
        config.plugins.delete('prefetch-index');

        config.plugin('define').tap(args => {
            args[0]['process.env'].CODE_ENV = JSON.stringify(process.env.CODE_ENV);
            return args;
        });
        config.module
            .rule('wasm')
            .test(/\.wasm$/)
            .use('file-loader')
            .loader('file-loader')
            .tap(options => {
                return {
                    limit: 0
                };
            });
    }
};
