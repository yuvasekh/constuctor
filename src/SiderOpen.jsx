import {  AppstoreOutlined,MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom";
import { faChartLine, faDatabase, faGauge, faListCheck, faShieldHalved, faUser, faUsersGear } from '@fortawesome/free-solid-svg-icons';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(    <Link to="/home">Report </Link>, '/yuva', <MailOutlined />, [
    getItem(    <Link to="/summary">Summary</Link>, '/graphs',<FontAwesomeIcon icon={faGauge} />),
    getItem(    <Link to="/data-recovery">Data Recovery</Link>, '/data-recovery',<FontAwesomeIcon icon={faDatabase} />),
    getItem(    <Link to="/data-inventory">Data Inventory</Link>, '/data-inventory',<FontAwesomeIcon icon={faListCheck} />),
    getItem(    <Link to="/userpermissions">User Permissions</Link>, '/userpermissions',<FontAwesomeIcon icon={faUsersGear} />),
    getItem(    <Link to="/performance">Performance</Link>, '/performance',<FontAwesomeIcon icon={faChartLine} />),
  ]),
  getItem(    <Link to="/datalake-inventory">Datalake Settings</Link>, '/datalake-inventory', <FontAwesomeIcon icon={faListCheck} />)
  ,
  getItem(    <Link to="/users">Users</Link>, '/users', <FontAwesomeIcon icon={faUser} />),
];
const SliderOpen = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState();
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu

        theme={theme}
        
  
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
 
  
    </>
  );
};
export default SliderOpen;