/*
 * @Author: your name
 * @Date: 2020-10-21 09:59:06
 * @LastEditTime: 2020-10-21 11:40:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\utils\api.js
 */
let api = {
    home: '/lecturer/lists?page=1&rows=20',
    login: '/user/login',
    verify: 'api/user/verify'+Date.now()
}

export default api