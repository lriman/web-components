import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledCard } from './_style';

export default function Card(props) {
  const {
    display,
    margin,
    border,
    padding,
    borderRadius,
    boxShadow,
    background,
    children,
    height,
    width,
    style,
    ...rest
  } = props;

  return (
    <StyledCard
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      sDisplay={display}
      sMargin={margin}
      sBorder={border}
      sPadding={padding}
      sBorderRadius={borderRadius}
      sBoxShadow={boxShadow}
      sBackground={background}
      sHeight={height}
      sWidth={width}
      sStyle={style}
      {...rest}
    >
      {children}
    </StyledCard>
  );
}

Card.propTypes = {
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  margin: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

Card.defaultProps = {
  display: REFS.DISPLAY.BLOCK,
  margin: null,
  border: null,
  padding: null,
  borderRadius: null,
  boxShadow: null,
  background: null,
  height: null,
  width: null,
  style: null,
  children: null,
};

Card.REFS = REFS;
