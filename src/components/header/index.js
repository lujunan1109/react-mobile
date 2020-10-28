/*
 * @Author: your name
 * @Date: 2020-10-19 15:36:57
 * @LastEditTime: 2020-10-28 16:08:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\components\header\index.js
 */
import React,{useState} from 'react';
import './index.less';
import { withRouter } from 'react-router-dom';
import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

function Header(props) {
    const [visible, setVisible] = useState(true)
    const [selected, setSelected] = useState("")
    const { location } = props;
    let isShowH = true;
    let pathname = location.pathname.replace("/","")
    if (location.pathname === '/login') { isShowH = false; } else { isShowH = true; }



   const onSelect = (opt) => {
        setVisible(false)
        setSelected(opt.props.value)
      };
     const handleVisibleChange = (visible) => {
        setVisible(visible);
      };

    return (
        isShowH ? <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={visible}
              overlay={[
                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={handleVisibleChange}
              onSelect={onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >{pathname}</NavBar>
      </div> : ""
    );

}

export default withRouter(Header);