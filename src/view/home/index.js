/*
 * @Author: your name
 * @Date: 2020-10-19 15:06:47
 * @LastEditTime: 2020-10-28 11:46:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\view\home\index.js
 */
import React from 'react';
import classnames  from 'classnames';
import "./style.module.less";
import {Link}  from 'react-router-dom'
import store from '../../store';
import { Accordion, List,Button } from 'antd-mobile';

  
function Home() {
    const {isShowHeader } = store.getState().reducers;
    const onChange = (key) => {
        console.log(key);
      }

    return (
        <div className={classnames("box")}>
            {isShowHeader? <Link to="/goods"><Button>点击跳转goods页面</Button></Link>:""}

            <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={onChange}>
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
        </div>
    );

}

export default Home;