##### 记录一下配置的一些东西

> [CLI 官网](https://cli.vuejs.org/zh/guide/prototyping.html)
> [Github 配置文档](https://github.com/vuejs/vue-cli/tree/dev/docs/config)
> [CLI 配置参考](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)
1. 配置文件在 vue.config.js 里面

```js
module.exports = {
    // 这是build的时候，生成路径
    publicPath: process.env.NODE_ENV === 'production' ? 'https://res.smzdm.com/admin_edm/dist/' : '/', 
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true
    }
};
```

2. Invalid Host header的解决方案

新版的webpack-dev-server增加了安全验证，默认检查hostname，如果hostname不是配置内的，将中断访问。

```js
module.exports = {
    devServer: {
        disableHostCheck: true,
    }
}
```
