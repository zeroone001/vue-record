import Vue from 'vue';
import VueRouter from 'vue-router';
/*
    this.$router 可以访问路由器
    this.$route 可以访问当前路由
*/
Vue.use(VueRouter);
const routes = {
    path: '/',
    component: Main
};

export default new VueRouter({
    routes
});
