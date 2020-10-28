/*
 * @Author: your name
 * @Date: 2020-10-19 15:06:47
 * @LastEditTime: 2020-10-28 15:23:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\view\user\index.js
 */
import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    linkSomePage() {
        this.props.history.push({pathname:'/show',query:{id:123,q:"canshu"}})
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.linkSomePage.bind(this)}>点击跳转到show页面并且带点参数</button>
            </div>
         );
    }
}
 
export default User;