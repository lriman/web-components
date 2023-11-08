import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { StyledHeading } from './_style';
import { getLevelSize, getHeadingTagName } from '../_utils';

export default function Heading(props) {
  const { size, level, textAlign, color, children, ...rest } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const levelSize = getLevelSize(level);

  return (
    <StyledHeading
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      as={getHeadingTagName(levelSize || size)}
      sSize={levelSize || size}
      sTextAlign={textAlign}
      sColorType={colorType}
      sColor={color}
      {...rest}
    >
      {children}
    </StyledHeading>
  );
}

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  level: PropTypes.number,
  textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  size: REFS.SIZES.M,
  level: null,
  textAlign: null,
  color: null,
};

Heading.REFS = REFS;
