import React from 'react';

import { addDataAttributes } from '../../_utils';

import Logo from '../../Logo';
import Grid, { Item } from '../../Grid';

import { COMPONENTS } from '../_constants';
import { StyledLayoutBlankHeader } from '../_style';

export default function LayoutBlankHeader() {
  return (
    <StyledLayoutBlankHeader {...addDataAttributes({ component: COMPONENTS.HEADER })}>
      <Grid justify={Grid.REFS.JUSTIFY.CENTER}>
        <Item>
          <Logo />
        </Item>
      </Grid>
    </StyledLayoutBlankHeader>
  );
}
