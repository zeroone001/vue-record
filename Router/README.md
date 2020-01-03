#### 编程式导航

```js
this.$router.push({path: '', query: {a: ''}});
this.$router.push({name: '', params: {b: ''}});
// 这种情况是params 不生效的
this.$router.push({path: '', params: {a: ''}})
```

#### 重定向

```js

```

#### 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示
```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

```js
const router = new Router({
    routes: [
        {
            path: '/',
            components: {
                default: User,
                a: Usera,
                b: Userb
            }
        }
    ]
})
```

#### 路由组件传参

props解耦

#### 相同路由，参数不同不刷新的问题

1. 给router-view 设置key
这种方式可能对性能不好
```html
<keep-alive>
      <router-view :key="$route.fullPath"></router-view>
</keep-alive>
```
2. 官方的方法
```js
watch: {
    '$route' () {
        // 执行数据更新
    }
}
```
3. 组件导航来设置对应的meta属性
```js
beforeRouteEnter (to, from, next) {
    to.meta.keepAlive = false;
    next();
},
beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = false;
    next();
}
```
