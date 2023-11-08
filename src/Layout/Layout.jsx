import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledLayout } from './_style';

import LayoutSection from './_internal/LayoutSection';
import LayoutBlock from './_internal/LayoutBlock';
import LayoutHeader from './_internal/LayoutHeader';
import LayoutNavigation from './_internal/LayoutNavigation';
import LayoutClose from './_internal/LayoutClose';

export default function Layout(props) {
  const { children } = props;

  return <StyledLayout {...addDataAttributes({ component: COMPONENTS.GENERAL })}>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

Layout.Section = LayoutSection;
Layout.Block = LayoutBlock;
Layout.Header = LayoutHeader;
Layout.Navigation = LayoutNavigation;
Layout.Close = LayoutClose;
