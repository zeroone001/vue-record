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
