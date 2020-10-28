/*
 * @Author: your name
 * @Date: 2020-10-19 15:08:39
 * @LastEditTime: 2020-10-28 15:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\view\goods\index.js
 */
import React, { Component } from 'react';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props, 'goods')
        return ( 
            <div>
              <button onClick={()=>{
                  this.props.history.push('/user')
              }}>点击跳转到user页面</button> 
            </div>
         );
    }
}
 
export default Cart;