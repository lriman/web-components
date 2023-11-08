import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { StyledSpan } from './_style';

export default function Span(props) {
  const { size, weight, color, isAccented, isDigital, noWrap, children, ...rest } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledSpan
      {...addDataAttributes({ component: COMPONENTS.GENERAL, size })}
      sSize={size}
      sWeight={weight}
      sColorType={colorType}
      sColor={color}
      isAccented={isAccented}
      isDigital={isDigital}
      noWrap={noWrap}
      {...rest}
    >
      {children}
    </StyledSpan>
  );
}

Span.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  weight: PropTypes.oneOf(Object.values(REFS.WEIGHTS)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
  isAccented: PropTypes.bool,
  isDigital: PropTypes.bool,
  noWrap: PropTypes.bool,

  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  size: null,
  weight: null,
  color: null,
  isAccented: false,
  isDigital: false,
  noWrap: false,
};

Span.REFS = REFS;
