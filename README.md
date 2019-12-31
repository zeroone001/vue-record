### vue-record

#### 创建Vue的几种方式

```js
import Vue from 'vue';
import App from './App.vue';

// 1
let Main = Vue.component('App', App);
new Main({
    el: '#app'
})

// 2 
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})

// 3 render 函数
new Vue({
    el: '#app',
    components: { App },
    render (h) => h('App')
})
```

#### Vue 中的 computed 和 watch 的区别在哪里?

   * computed 是由data中已知的变量得到一个新值。这个新值只会根据已知值的变化而变化。
   * watch，监听数据的变化，支持深度监听
#### 渲染流程

   * new Vue 初始化
   * 挂载$mount方法，通过自定义render方法、template、el等生成render函数
   * 通过Watcher监听数据的变化
   * 当数据发生变化时，render函数执行生成VNode对象
   * 通过patch方法，对比新旧VNode对象，通过DOM Diff算法，添加、修改、删除真正的DOM元素
   
