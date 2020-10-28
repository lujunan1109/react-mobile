/*
 * @Author: your name
 * @Date: 2020-10-19 15:06:47
 * @LastEditTime: 2020-10-27 19:57:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\view\login\index.js
 */
import React, { useState, useEffect,useRef } from 'react';
import "./index.less";
import {post} from '../../utils/request'


function Login(props) {
    const [userName, setUsername] = useState("");
    const [userPsw, setUserpsw] = useState("");
    const [userVerify, setVerify] = useState("");
    const refContainer = useRef(null);

    const [imgSrc, setImgsrc] = useState("/api/user/verify?" + Date.now());

    const loginSubmit= () => {
        let data = {
            username:userName,
            password:userPsw,
            verify:userVerify
        }
            post('/user/login',data).then(res => {
                console.log(props)
                props.history.push('/home')
            })
        
    }
    useEffect(()=> {
        refContainer.current.focus();
    })


    return (
        <div>
            <div className="login-box" style={{dispaly:'none'}}>
                <h2 className="login-title" ref={refContainer} >登录框</h2>
                <div className="user-box">
                    <input type="text" placeholder="请输入用户名"   value={userName} onChange={
                        (e)=>{
                           setUsername(e.target.value) 
                        }} />
                </div>
                <div className="user-box">
                    <input type="password" placeholder="请输入密码" value={userPsw}
                    onChange={
                        (e)=>{
                           setUserpsw(e.target.value) 
                        } }/>
                </div>
                <div className="user-yzm">
                    <input type="text" placeholder="请输入验证码" value={userVerify} className="yzm-int" 
                    onChange={
                        (e)=>{
                            setVerify(e.target.value) 
                        } }/>
                        <img src={imgSrc} alt={"验证码"} className="verify-img"
                        onClick={() => {
                            setImgsrc("/api/user/verify?" + Date.now())
                        }}
                    />
                </div>
                <button className="btn" onClick={loginSubmit}>登录</button>
            </div>
        </div>
    );

}





export default Login;