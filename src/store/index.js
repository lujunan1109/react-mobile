/*
 * @Author: your name
 * @Date: 2020-10-19 16:29:56
 * @LastEditTime: 2020-10-23 16:37:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\store\index.js
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from "redux-thunk";
import reducers from "./reducers.js";
 
const store = createStore(
    combineReducers({reducers}),
    applyMiddleware(Thunk)
)
 
export default store;