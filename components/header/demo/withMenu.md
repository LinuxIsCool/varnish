---
order: 1
title:
  en-US: With Menu
---

Header inside a layout with a logo, menu, and content.

```jsx
import styled from 'styled-components';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Header, Logos, Layout, Menu } from '@allenai/varnish';

const { HeaderColumns, HeaderTitle } = Header;

const MenuArea = styled.div`
  justify-self: right;
`;

ReactDOM.render(
  <Layout bgcolor="N2">
    <Header>
      <HeaderColumns gridTemplateColumns="auto auto 1fr">
        <Logos.AI2Logo includeText={false} />
        <HeaderTitle>Title</HeaderTitle>
        <MenuArea>
          <Menu defaultSelectedKeys={[1]} mode="horizontal">
            <Menu.Item key="1">
              <a>
                <MailOutlined /> Link 1
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a>
                <AppstoreOutlined /> Link 2
              </a>
            </Menu.Item>
          </Menu>
        </MenuArea>
      </HeaderColumns>
    </Header>
    <Layout.Content>Content!</Layout.Content>
  </Layout>,
  mountNode,
);
```
