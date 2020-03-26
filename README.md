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
   
#### template模板

Vue的模板基于纯HTML，基于Vue的模板语法，还是可以按照以前HTML式写结构。

#### AST 抽象语法树

   parse:Vue使用HTML的Parser将HTML模板解析为ASToptimizer:对AST进行一些优化static静态节点的标记处理，提取最大的静态树，当_update更新界面时，会有一个patch的过程，diff算法会直接跳过静态节点，从而减少了patch的过程，优化了patch的性能generateCode:根据 AST 生成 render 函数

#### renderFn 渲染函数 

渲染函数是用来生成Virtual DOM(vdom)的。Vue推荐使用模板来构建我们的应用界面，在底层实现中Vue会将模板编译成renderFn函数，当然我们也可以不写模板，直接写渲染函数，以获得更好的控制

#### Virtual DOM (vdom，也称为VNode)

虚拟DOM树，Vue的Virtual DOM Patching算法是基于 Snabbdom库 的实现，并在些基础上作了很多的调整和改进。只能通过RenderFn执行vm._render()生成，patch的目标都是Vnode，并且每个Vnode在全局都是唯一的

#### patch

在上面vdom已经说到这个，但还是要说一句，patch是整个virtaul-dom当中最为核心的方法，主要功能是对旧vnode和新vnode进行diff的过程，最后生成新的DOM节点通过updataComponent()方法重新渲染，vue对此做了相当多的性能优化

#### Watcher (观察者)

每个Vue组件都有一个对应的 Watcher ，这个 Watcher 将会在组件 render 的时候收集组件所依赖的数据，并在依赖有更新的时候，触发组件vm._updata调用patch()进行diff，重新渲染DOM。

#### debounce

```js
const debounce = (func, wait, immediate) => {
    let timeout;
    return function (...args) {
        const later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(this, args);
            }
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (immediate && !timeout) {
            func.apply(this, args);
        }
    };
};

export default debounce;
```
#### $nextTick

```js
mounted () {
    this.$nextTick(() => {
        setTimeout(() => {
            // code
        }, 0);
    });
}
```
