/*
 * @Author: your name
 * @Date: 2020-10-19 10:16:22
 * @LastEditTime: 2020-10-27 22:39:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\index.js
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css'
import * as serviceWorker from './serviceWorker';
import App from './router';
import "lib-flexible";
import {Provider} from 'react-redux';
import store from './store';
import 'antd-mobile/dist/antd-mobile.css';
import { get, post } from './utils/request';
import api from './utils/api';
import { BrowserRouter } from "react-router-dom";

// 注意：Vue 框架是在Vue.prototype原型上绑定，而react不是在React.prototype原型上绑定，而是在Component上绑定
Component.prototype.get = get;
Component.prototype.post = post;
Component.prototype.api = api;


function renderPage() {

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
         <App/>
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
}

renderPage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
store.subscribe(renderPage)
