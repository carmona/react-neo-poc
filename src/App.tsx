import React from 'react';
import { Avatar, Image, TopNav } from '@avaya/neo-react';
import Router from './routes';
import logoImage from './assets/logo-condensed-light.svg';

import './styles/vendors.scss';

const App = () => {
  const theLogo = (
    <a href="/" title="Logo Link">
      <Image src={logoImage} isDecorativeOrBranding />
    </a>
  );
  return (
    <main>
      <TopNav aria-label="Main header" logo={theLogo}>
        <TopNav.IconButton aria-label="notifications" icon="notifications-on" />
        <TopNav.LinkButton href="/">Home</TopNav.LinkButton>
        <TopNav.LinkButton href="/forms">Forms</TopNav.LinkButton>
        <TopNav.Avatar avatar={<Avatar initials="FC" />} />
      </TopNav>
      <Router />
    </main>
  );
};

export default App;
