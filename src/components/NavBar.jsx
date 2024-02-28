import React from 'react';
import { useState } from 'react';
import { FileDoneOutlined, HomeOutlined, UserOutlined, FileProtectOutlined, UserAddOutlined, MenuOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Divider } from '@chakra-ui/react'

import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const menu = [
    {
        label: 'Inicio',
        icon: React.createElement(HomeOutlined),
        route: '/'
    },
    {
        label: 'Registro',
        icon: React.createElement(UserAddOutlined),
        route: '/register'
    },
    {
        label: 'Nuevos Accesos',
        icon: React.createElement(UserOutlined),
        route: '/access'
    },
    {
        label: 'Requisiciones',
        icon: React.createElement(FileDoneOutlined),
        route: '/requisitions'
    },
    {
        label: 'Órdenes de Compra',
        icon: React.createElement(FileProtectOutlined),
        route: '/orders'
    },
]


const NavBar = ({ index, children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'white',
                }}
            >
                <h1 className="title-h1">
                    <MenuOutlined
                        onClick={() => setCollapsed(!collapsed)}
                    />
                    &nbsp; &nbsp; &nbsp; Ayuda digital
                </h1>
            </Header>
            <Divider />
            <Layout>
                <Sider
                    //collapsible 
                    collapsed={collapsed} 
                    //onCollapse={(value) => setCollapsed(value)}
                    //width={collapsed ? 0 : 225}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[`${index}`]}
                        //defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                    >
                        {menu.map((item, index) => (
                            <Menu.Item key={index}>
                                <Link to={item.route}>
                                    <span>{item.icon} &nbsp; <span>{item.label} </span> </span>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout
                    className='layout'
                >
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default NavBar

/*NavBar.propTypes = {
    children: PropTypes.node,
    with: PropTypes.bool
}*/