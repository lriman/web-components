import React from 'react';

import Logo from '../Logo';

import Block from '../Typography/Block';
import Navigation from './Navigation.example';

import LayoutAdmin from '../LayoutAmin/LayoutAdmin';

export default function LayoutAdminExample() {
  return (
    <LayoutAdmin>
      <LayoutAdmin.Side>
        <LayoutAdmin.Side.Block>
          <Logo />
        </LayoutAdmin.Side.Block>
        <LayoutAdmin.Side.Block isGrow>
          <Navigation />
        </LayoutAdmin.Side.Block>
        <LayoutAdmin.Side.Block>
          <Block color="secondary" size="s">
            Версия 1.1.1
          </Block>
        </LayoutAdmin.Side.Block>
      </LayoutAdmin.Side>
      <LayoutAdmin.Content>
        <LayoutAdmin.Content.Block>Header</LayoutAdmin.Content.Block>
        <LayoutAdmin.Content.Block isGrow>Content</LayoutAdmin.Content.Block>
      </LayoutAdmin.Content>
    </LayoutAdmin>
  );
}
