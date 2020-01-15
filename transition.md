### 过渡

#### 加购物车的demo
```html
<transition>
    <div id="J_cart_end"></div>
</transition>
```
```js
export default {
    methods: {
        enter (el, done) {
            const cartEnd = document.getElementById('J_cart_end');
            this.cartTLeft = cartEnd.offsetLeft;
            this.cartTop = cartEnd.offsetTop + 18;
            this.timer = setTimeout(() => {
                el.style.left = self.cartTLeft + 20 + 'px';
                el.style.top = self.cartTop + 'px';
                el.style.transition = 'left 0.3s linear, top 0.3s ease-in';
                done();
            }, 0);
        }
    }
}
```
