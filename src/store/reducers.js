

/*
 * @Author: your name
 * @Date: 2020-10-19 16:32:42
 * @LastEditTime: 2020-10-27 20:44:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\store\reducers.js
 */
const defaultState = {
    count: 10,
    isShowMenu: true,
    isShowHeader: true,
}

export default (state=defaultState,action)=> {
    if(action.type==='top') {
        state.count = action.payload;
    }

    if(action.type==='low') {
        state.count = action.payload;
    }
    if(action.type === 'isShowTop') {
        state.isShowMenu = !state.isShowMenu;
    }
    if(action.type === 'isShowHeader') {
        state.isShowHeader = action.isShowHeader;
    }
    return state;
}
