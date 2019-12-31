import Vue from 'vue';
import VueRouter from 'vue-router';
/*
    this.$router 可以访问路由器
    this.$route 可以访问当前路由
*/
Vue.use(VueRouter);
const User = {
    tempalte: '<div>{{$route.params.id}}</div>',
    watch: {
        '$route' (to, from) {
            // 对路由变化做出相应
        }
    }
}
const Post = {
    tempalte: '<div>123</div>'
};
const routes = [
    {
        path: '/',
        name: 'index', // 命名路由
        component: Main
    },
    {
        path: '/user/:id',
        component: User,
        children: [
            {
                path: 'posts',
                component: Post
            }
        ]
    },
    {
        path: '/a',
        alias: '/b', // a的别名是b
    },
    {
        path: '/d',
        redirect: '/c' // 访问d的时候，重定向到c
    }
];

export default new VueRouter({
    routes
});
