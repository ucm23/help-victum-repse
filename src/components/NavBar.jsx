import React from 'react';
import { FileDoneOutlined, HomeOutlined, UserOutlined, FileProtectOutlined, UserAddOutlined } from '@ant-design/icons';
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


const NavBar = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout
        style={{
            height: '100%',
        }}
    >
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                background: 'white',
            }}
        >
            <h1 className="title-h1">Ayuda digital de VICTUM-REPSE</h1>
        </Header>
        <Divider />
        <Layout>
            <Sider
                width={200}
                style={{
                    background: colorBgContainer,
                }}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                >
                    {menu.map((item, index) => (
                        <Menu.Item key={index}>
                            <Link to={item.route}>
                                <span>{item.icon} &nbsp; {item.label}</span>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout
                style={{
                    padding: '50px 100px',
                    margin: '0 auto'
                }}
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