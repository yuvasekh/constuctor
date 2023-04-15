// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine, faDatabase, faGauge, faListCheck, faShieldHalved, faUser, faUsersGear } from '@fortawesome/free-solid-svg-icons';
// import React,{useEffect, useState} from 'react';
// import { Link} from 'react-router-dom';


// const SiderOpen = (props) => {
//   const [click,setCick]=useState(false)
//   useEffect(()=>
//   {

//   },[click])
//   const fun=(data)=>
//   {
       

//     if(data==Report)
//     { setCick(true)

//     }


//   }
//     const menu = [
//         {name:"Report",key:0,icon:<FontAwesomeIcon icon={faGauge} />},
//         {name:"Summary",route:'/graphs',key:1,icon:<FontAwesomeIcon icon={faGauge} />},
//         {name:"Data Recovery",route:'/data-recovery',key:2,icon:<FontAwesomeIcon icon={faDatabase} />},
//         {name:"Data Inventory",route:'/data-inventory',key:3,icon:<FontAwesomeIcon icon={faListCheck} />},
//         {name:"Users & Permissions",route:'/userpermissions',key:4,icon:<FontAwesomeIcon icon={faUsersGear} />},
//         // {name:"Security Rating",route:'/security',key:5,icon:<FontAwesomeIcon icon={faShieldHalved} />},
//         {name:"Performance",route:'/performance',key:6,icon:<FontAwesomeIcon icon={faChartLine} />},
//         {name:"Datalake Settings",route:'/datalake-inventory',key:7,icon:<FontAwesomeIcon icon={faListCheck} />},
//         {name:"Users",route:'/users',key:8,icon:<FontAwesomeIcon icon={faUser} />}
//     ];
//     const menu1 = [
//         {name:"Report",key:10,icon:<FontAwesomeIcon icon={faGauge} />},
//         // {name:"Security Rating",route:'/security',key:5,icon:<FontAwesomeIcon icon={faShieldHalved} />},
//         {name:"Performance",route:'/performance',key:11,icon:<FontAwesomeIcon icon={faChartLine} />},
//         {name:"Datalake Settings",route:'/datalake-inventory',key:12,icon:<FontAwesomeIcon icon={faListCheck} />},
//         {name:"Users",route:'/users',key:13,icon:<FontAwesomeIcon icon={faUser} />}
//     ];

//     return (
//         <div className='w-full h-10 items-center'>
//             {
//                 click===false?<>  {menu.map((item)=>(

// <Link key={item.key} className={props.selected === item.route ? 'bg-sider-selected my-3 text-miracle-blue h-10 w-full flex items-center' : ' text-white flex items-center my-3'} to ={item.route} onClick={()=>{fun();props.setSelected(item.route)}}>
//     <span class="mx-3">
//         {item.icon}
        
//     </span>

//     <div className='text-sm font-normal' to ={item.route}> {item.name} </div>
// </Link>
// ))}</>:<>  {menu1.map((item)=>(

// <Link key={item.key} className={props.selected === item.route ? 'bg-sider-selected my-3 text-miracle-blue h-10 w-full flex items-center' : ' text-white flex items-center my-3'} to ={item.route} onClick={()=>{props.setSelected(item.route);fun(item.name)}}>
//     <span class="mx-3">
//         {item.icon}
        
//     </span>

//     <div className='text-sm font-normal' to ={item.route}> {item.name} </div>
// </Link>
// ))}</>
//             }
          
//         </div>
//     )
// }

// export default SiderOpen
import {  AppstoreOutlined,MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useState } from 'react';
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
  getItem('Navigation One', 'sub', <MailOutlined />, [
    getItem('Option 1', '111',<MailOutlined />),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', '5', <AppstoreOutlined />)
  ,
  getItem('Navigation Three', '6', <SettingOutlined />),
];
const SliderOpen = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);

    setCurrent(e.key);
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
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default SliderOpen;