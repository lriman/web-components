import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { StyledParagraph } from './_style';

export default function Paragraph(props) {
  const { size, color, textAlign, children, ...rest } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledParagraph
      {...addDataAttributes({ component: COMPONENTS.GENERAL, size })}
      sSize={size}
      sTextAlign={textAlign}
      sColorType={colorType}
      sColor={color}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),

  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  size: null,
  textAlign: null,
  color: null,
};

Paragraph.REFS = REFS;
