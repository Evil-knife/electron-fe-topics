import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import { Button } from 'baseui/button';

const Header = () => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>Uber</StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <StyledLink href="#/">
          Home
        </StyledLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledLink href="#/detail">
          详情
        </StyledLink>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <Button>Get started</Button>
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
);

const App = ({ route }) => (
  <div>
    <Header />
    {route?.routes && renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
    path: PropTypes.string,
    exact: PropTypes.bool,
  }),
};
App.defaultProps = {
  route: {},
};
export default App;
