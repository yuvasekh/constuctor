import {
  
  MailOutlined,
  
} from "@ant-design/icons";
import { Menu, Switch ,Layout} from "antd";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const { Sider } = Layout;
import {
  faChartLine,
  faDatabase,
  faGauge,
  faListCheck,
  faShieldHalved,
  faUser,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
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
  getItem('Report', "/yuva", <MailOutlined />, [
    getItem(
      <Link to="/summary">Summary</Link>,
      "/graphs",
      <FontAwesomeIcon icon={faGauge} />
    ),
    getItem(
      <Link to="/data-recovery">Data Recovery</Link>,
      "/data-recovery",
      <FontAwesomeIcon icon={faDatabase} />
    ),
    getItem(
      <Link to="/data-inventory">Data Inventory</Link>,
      "/data-inventory",
      <FontAwesomeIcon icon={faListCheck} />
    ),
    getItem(
      <Link to="/userpermissions">User Permissions</Link>,
      "/userpermissions",
      <FontAwesomeIcon icon={faUsersGear} />
    ),
    getItem(
      <Link to="/performance">Performance</Link>,
      "/performance",
      <FontAwesomeIcon icon={faChartLine} />
    ),
  ]),
  getItem(
    <Link to="/datalake-inventory">Datalake Settings</Link>,
    "/datalake-inventory",
    <FontAwesomeIcon icon={faListCheck} />
  ),
  getItem(
    <Link to="/about">Users</Link>,
    "/users",
    <FontAwesomeIcon icon={faUser} />
  ),
];
const SliderOpen = () => {
  const [current, setCurrent] = useState();

  return (
    <>
   
   <Sider width={'fit-content'} height={'100vh'} >
   <Menu
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </Sider>
   
    </>
  );
};
export default SliderOpen;
