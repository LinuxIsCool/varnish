import React from 'react';
import { render } from 'enzyme';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';

import Header from '..';
import { DefaultAppLayoutProvider } from '../../layout';
import Theming from '../../varnish';

const { ThemeProvider } = Theming;

const { HeaderColumns, HeaderTitle } = Header;

describe('Header', () => {
  mountTest(Header);
  rtlTest(Header);

  describe('variants', () => {
    it.skip('default', () => { // TODO: repace test once we get styled-components to run in tests
      const wrapper = render(
        <ThemeProvider>
          <Header>
            <HeaderColumns gridTemplateColumns="auto 1fr">
              <HeaderTitle>Title</HeaderTitle>
            </HeaderColumns>
          </Header>
        </ThemeProvider>,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it.skip('dark', () => { // TODO: repace test once we get styled-components to run in tests
      const wrapper = render(
        <ThemeProvider>
          <DefaultAppLayoutProvider layoutVariant="app">
            <Header>
              <HeaderColumns gridTemplateColumns="auto 1fr">
                <HeaderTitle>Title</HeaderTitle>
              </HeaderColumns>
            </Header>
          </DefaultAppLayoutProvider>
        </ThemeProvider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
