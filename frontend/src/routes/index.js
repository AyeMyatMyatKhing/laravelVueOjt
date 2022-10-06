import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import postList from '../pages/post/PostList'
import guestPost from '../pages/post/GuestPostList'
import createPost from '../pages/post/create'
import login from '../pages/user/login'
import userList from '../pages/user/List'

const routes = [
    {
        path: '/post',
        component : postList,
        name: 'postList'
    },
    {
        path: '/',
        component: guestPost,
        name : 'guestPost'
    },
    {
        path: '/post/create',
        component: createPost,
        name: 'createPost'
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    },
    {
        path: '/users',
        component: userList,
        name: 'userList'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router

