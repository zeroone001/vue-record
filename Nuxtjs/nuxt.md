##### nuxt-link

1. 如果要使用params参数的话，必须要用name参数，不能用path参数，name的值要从`.nuxt/router.js`里面找；`<nuxt-link :to="{name: 'detail', params: {a: '1'}, query: {'a': '123'}}"></nuxt-link>`