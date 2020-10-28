/*
 * @Author: your name
 * @Date: 2020-10-19 16:02:30
 * @LastEditTime: 2020-10-28 14:57:53
 * @LastEditors: Please set LastEditors
 * @Description: 统一封装处理所有组件的动态加载。
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\utils\loadable.js
 */
import Loadable from "react-loadable";
import React from 'react';


export default (loader) => {
    return Loadable({
        loader,
        loading() {
            return <div>正在加载</div>
        },
    });
}