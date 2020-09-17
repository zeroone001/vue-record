## context 上下文

### app 

Vue 根实例, 暂时没发现有什么作用,可以这么用app.$axios, 比如plugins里面在prototype上加了一个方法$share, 这个时候，app.$share 就能获取到了

### isDev

是否是开发 dev 模式, 这个主要用在nuxt.config.js, 比如判断是dev模式，然后加上eslint 检测，再比如，dev模式下，不加hash

### route

路由实例

### store

Vuex 数据

使用： store.state.xxx 或者 store.commit('xxx', xxxx);

### params

等于route.params,这个比较常用

### query

等于route.query, 也比较常用

### env

nuxt.config.js 中配置的环境变量 env: {}

配置好了之后process.env.xxx 也是可以访问的

### req 

```js
var url = req.protocol + '://' + req.hostname + req.url;
console.log('$route', url);
```

1. express 的 `req.protocol` 可以获取 http 或者 https , Node Request 是没有 protocol 的
2. `req.url` 比如说好价列表页， 那就是`/youhui?qwe=312321`
3. `req.host` 与 `req.hostname` 与 `req.headers.host` nuxt 是基于express的， express 推荐 使用`req.hostname`， 然后， `req.headers.host` 是带端口号的， 前面两个是不带的
4. `req.headers` 是一个对象 分别有下面这几个key：
    ```js
    const headers = {
        host: 'ssr.smzdm.com:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/ 537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        cookie: 'lalalalala'
    }
    ``` 
5. `req.query` 对象， 比如http://ssr.smzdm.com:3000/youhui?asd=qwe 链接， 然后`req.query` === `{ asd: 'qwe' }`
6. `req.params` 这个在nuxt 里面就不要用了，直接用context 的params
7. 想看更多req的东西，官网链接`https://expressjs.com/en/4x/api.html#req`， 我们现在用的express 是4.x 版本的

### res

Node.js API 的 Response 对象

### redirect

用这个方法重定向用户请求到另一个路由
