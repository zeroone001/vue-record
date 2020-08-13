<!--
 * @Description: 请输入文件描述
 * @Author: liuyongsheng
 * @Date: 2019-12-31 20:59:51
-->
#### @nuxtjs/axios


#### fetch

[https://juejin.im/post/5ecb813751882543184598fe](https://juejin.im/post/5ecb813751882543184598fe)

fetch 在所有 vue 组件中都可以使用
fetch 是在组件实例化之后被调用的，可以访问到 this
可以非常简单的直接修改本地数据

```js
export default {
  data() {
    return {
      todos: []
    };
  },
  async fetch() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    // `todos` has to be declared in data()
    this.todos = data;
  }
};
```

## 获取完成URL

`req.host + req.url`