import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import IconSideClose from '../../Icon/IconSideClose';
import Logo from '../../Logo';
import Grid, { Item } from '../../Grid';

import { COMPONENTS } from '../_constants';
import { LayoutMainContext } from '../_context';
import {
  StyledLayoutMainSide,
  StyledLayoutMainSideInner,
  StyledLayoutMainHeader,
  StyledLayoutMainSideContent,
  StyledLayoutMainSideToggle,
} from '../_style';
import { getGridJustify } from '../_utils';

export default function LayoutMainSide(props) {
  const { children } = props;

  const node = useRef(null);

  const { isSideOpen, handleSideClose } = useContext(LayoutMainContext);
  const [width, handleSetWidth] = useState(null);

  const handleScroll = () => {
    node.current.scrollTop = window.scrollY;
  };

  const handleResize = () => {
    handleSetWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <StyledLayoutMainSide {...addDataAttributes({ component: COMPONENTS.SIDE })} isSideOpen={isSideOpen} ref={node}>
      <StyledLayoutMainSideInner>
        <StyledLayoutMainHeader>
          <Grid justify={getGridJustify(width)} alignItems={Grid.REFS.ALIGN_ITEMS.CENTER}>
            <Item>
              <Logo />
            </Item>
            <Item>
              <StyledLayoutMainSideToggle onClick={handleSideClose} isOnSide>
                <IconSideClose size={IconSideClose.REFS.SIZES.XL} />
              </StyledLayoutMainSideToggle>
            </Item>
          </Grid>
        </StyledLayoutMainHeader>
        <StyledLayoutMainSideContent>{children}</StyledLayoutMainSideContent>
      </StyledLayoutMainSideInner>
    </StyledLayoutMainSide>
  );
}

LayoutMainSide.propTypes = {
  children: PropTypes.node,
};

LayoutMainSide.defaultProps = {
  children: null,
};
