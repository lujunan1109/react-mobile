/*
 * @Author: your name
 * @Date: 2020-10-20 09:53:48
 * @LastEditTime: 2020-10-28 15:07:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\router\routeMenu.js
 */
import React,{lazy} from 'react';

// code-split
const Home = lazy(() => import('@/home'));
const Show = lazy(() => import('@/show'));
const Goods = lazy(() => import('@/goods'));
const User = lazy(() => import('@/user'));
const Login = lazy(() => import('@/login'));


const routeList = [
    {
        name: "登录",
        path: "/login",
        exact: true,
        render(props) {
            return <Login {...props}/>
        }
    },
    {
        name: "首页",
        path: "/home",
        exact: true,
        render(props) {
            return <Home {...props}/>
        }
    },
    {
        name: "课程",
        path: "/show",
        exact: true,
        render(props) {
            return <Show {...props}/>
        }
    },
    {
        name: "内容",
        path: "/goods",
        exact: true,
        render(props) {
            return <Goods {...props}/>
        }
    },
    {
        name: "我的",
        path: "/user",
        exact: true,
        render(props) {
            return <User {...props}/>
        }
    }

]

export default routeList;