import React, { Key, Component } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import About from './components/About';
import Cover from './components/Cover';
// import {noScrollbarsClassName} from 'react-remove-scroll-bar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Links from './components/links';

const style: React.CSSProperties = {
  background: '#ececec',
  margin: '0',
  overflow: 'hidden'
}

const menuStyles: React.CSSProperties = {
  margin: '0',
  width: '100vw',
  textAlign:'right'
}


const App = () => {
  const [menuState, setMenuState] = React.useState<string>('Home')

  const handleClick = (item: string) => {
    console.log('click ', item);
    setMenuState(item)
  }

  document.getRootNode()
  return (
    <div className={"App"} style={style}>
        <Menu selectedKeys={[menuState]} mode="horizontal" style={menuStyles}>
          <Menu.Item onClick={()=> handleClick('Home')}>
            <MailOutlined />
            Home
          </Menu.Item>
          <Menu.Item onClick={()=> handleClick('About')}>
            <AppstoreOutlined />
            About
          </Menu.Item>
          <Menu.Item onClick={()=> handleClick('Experience')}>
            <AppstoreOutlined />
            Experience
          </Menu.Item>
          <Menu.Item onClick={()=> handleClick('Skills')}>
            <AppstoreOutlined />
            Skills
          </Menu.Item>
          <Menu.Item onClick={()=> handleClick('Links')}>
            <AppstoreOutlined />
            Links
          </Menu.Item>
        </Menu>
        {menuState==='Home' && <Cover/>}
        {menuState==='About' && <About/>}
        {menuState==='Experience' && <Experience/>}
        {menuState==='Skills' && <Skills/>}
        {menuState==='Links' && <Links/>}
    </div>
  );
}

export default App;
