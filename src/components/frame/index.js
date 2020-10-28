/*
 * @Author: your name
 * @Date: 2020-10-20 10:57:15
 * @LastEditTime: 2020-10-27 19:50:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\components\frame\index.js
 */
import React from 'react';
import Header from "../header";

 
export default function Frame(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}