/*
 * @Author: your name
 * @Date: 2020-10-19 15:09:50
 * @LastEditTime: 2020-10-28 15:04:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\router\index.js
 */
import React, { Component,Suspense  } from 'react';
import {BrowserRouter, Route,Switch,withRouter} from 'react-router-dom';
import menuList from "./routeMenu.js";
import store from '../store';
import Header from '../components/header'


class Router extends Component {

    componentWillMount() {
        let {location,history} = this.props;
        console.log('location.pathname',location.pathname)

        if (menuList.some(i=>i.path===location.pathname && location.pathname!=='/login')){
             store.dispatch({
                 type:'isShowHeader',
                 isShowHeader: true
             })
        } else {
            history.push('/login')
            store.dispatch({
                type:'isShowHeader',
                isShowHeader: false
            })
        }
    }

    render() { 
     
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                <Header></Header>
                    <Switch>
                        
                        {  menuList.map((item,index)=> {
                            return <Route
                                path= {item.path}
                                exact= {item.exact}
                                render = {item.render}
                                key = {index}
                            />
                        })}
                    </Switch>
                </BrowserRouter>
          </Suspense>
         );
    }
}
 
export default withRouter(Router);

