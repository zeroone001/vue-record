> [官网链接](https://vuex.vuejs.org/zh/guide/)
```js
import Vue from 'vue';
import Vuex from 'vuex';
import app from './app.js';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        app
    },
    getters:{
        name: state => state.app.name
    }
})

// component.vue 命名空间
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters('app', ['name'])
    }
}
```

1. 使用常量代替mutation事件类型

使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然

2. Mutation必须是同步函数

3. Action可以是异步函数

4. 命名空间

`namespaced: true`

##### 学习文档

* [https://juejin.im/post/5d500d0de51d453b5c121890](https://juejin.im/post/5d500d0de51d453b5c121890)
* [https://www.cnblogs.com/mengfangui/p/9146290.html](https://www.cnblogs.com/mengfangui/p/9146290.html)
* [源码分析](https://tech.meituan.com/2017/04/27/vuex-code-analysis.html)


