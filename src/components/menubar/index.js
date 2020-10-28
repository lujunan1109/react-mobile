/*
 * @Author: your name
 * @Date: 2020-10-20 15:11:00
 * @LastEditTime: 2020-10-23 17:18:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\components\menubar\index.js
 */
import React, { useState, useEffect } from 'react';
import "./index.less";
import store from '../../store';

const Menubar = (props) => {
    const [show, setShow] = useState(true)
    console.log(store.getState())
    useEffect(() => {
    
        if (window.location.pathname === "/") {
            setShow(false)
        }
    }, [])
    const {count,isShowMenu } = store.getState().reducers
    return (
     <div className={isShowMenu?'changA':'changeD'}><div className="menubar">
     {count}
       <button onClick={
           () => store.dispatch({ type: 'top' ,payload:11})
       }>+</button>
       <button onClick={() => store.dispatch({ type: 'low',payload:8 })}>-</button>
      </div>
       </div>
    )
}


export default Menubar;