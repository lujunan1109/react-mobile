/*
 * @Description: 
 * @Date: 2020-10-19 16:12:35
 * @LastEditTime: 2020-10-28 14:44:57
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\view\show\index.js
 */

import React, { Component} from 'react';
import {Toast} from 'antd-mobile'

class Show extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    componentDidMount() {
        Toast.loading('Loading...',10, () => {
            Toast.offline('Network connection failed !!!', 1);
        });
  
    //   setTimeout(() => {
    //     Toast.hide();
    //   }, 3000); 
    }



    render() { 
        const {query={id:1,q:2}} = this.props.location;
        console.log(this.props.location)
        return ( 
            <div>
        <p>接受的参数id:{query.id}  q:{query.q}</p>
        <button onClick={()=>{
            this.props.history.go(-1);
        }}>返回上一页</button>
            </div>
            //页面刷新参数缺失报错的问题，可以暂时储存在本地然后页面销毁的时候释放
         );
    }
}
 
export default Show;

