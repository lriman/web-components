import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import IconSideOpen from '../../Icon/IconSideOpen';
import IconSideClose from '../../Icon/IconSideClose';
import Grid, { Item } from '../../Grid';

import { COMPONENTS } from '../_constants';
import { LayoutMainContext } from '../_context';
import { StyledLayoutMainHeader, StyledLayoutMainSideToggle } from '../_style';

export default function LayoutMainHeader(props) {
  const { children } = props;
  const { isSideOpen, handleSideOpen, handleSideClose } = useContext(LayoutMainContext);

  const handleSideToggle = () => {
    if (isSideOpen) handleSideClose();
    else handleSideOpen();
  };

  return (
    <StyledLayoutMainHeader {...addDataAttributes({ component: COMPONENTS.HEADER })}>
      <Grid alignItems={Grid.REFS.ALIGN_ITEMS.CENTER} noWrap>
        <Item>
          <StyledLayoutMainSideToggle onClick={handleSideToggle}>
            {isSideOpen && <IconSideClose size={IconSideClose.REFS.SIZES.XL} />}
            {!isSideOpen && <IconSideOpen size={IconSideOpen.REFS.SIZES.XL} />}
          </StyledLayoutMainSideToggle>
        </Item>
        <Item grow>{children}</Item>
      </Grid>
    </StyledLayoutMainHeader>
  );
}

LayoutMainHeader.propTypes = {
  children: PropTypes.node,
};

LayoutMainHeader.defaultProps = {
  children: null,
};
