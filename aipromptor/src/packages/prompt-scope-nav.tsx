import React from 'react';
import { observer } from 'mobx-react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { promptScopeStore } from '../store'
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = promptScopeStore.scopes.map((i) => ({
    key: i.name,
    label: `${i.title}`,
}));

@observer
class TopPromptScopeNav extends React.Component {
    render() {
        if (promptScopeStore.loading) return "loading";
        return (
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
        );
    }
}

export default TopPromptScopeNav;