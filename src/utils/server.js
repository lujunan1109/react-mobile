/*
 * @Author: your name
 * @Date: 2020-10-20 20:26:01
 * @LastEditTime: 2020-10-20 21:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\utils\config.js
 */

import axios from "axios";
import qs from "qs";


const server = axios.create({
    baseURL: "/api",
    withCredentials: true,
    transformRequest: (data=>{
        return qs.stringify(data)
    })
})

export default server;
