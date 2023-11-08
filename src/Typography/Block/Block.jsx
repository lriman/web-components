import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { StyledBlock } from './_style';

export default function Block(props) {
  const { id, size, color, textAlign, margin, padding, vPadding, hPadding, children, ...rest } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledBlock
      {...addDataAttributes({ component: COMPONENTS.GENERAL, id, size })}
      sSize={size}
      sTextAlign={textAlign}
      sMargin={margin}
      sPadding={padding}
      sVPadding={vPadding}
      sHPadding={hPadding}
      sColorType={colorType}
      sColor={color}
      {...rest}
    >
      {children}
    </StyledBlock>
  );
}

Block.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
  margin: PropTypes.oneOf(Object.values(REFS.MARGIN)),
  padding: PropTypes.oneOf(Object.values(REFS.PADDING)),
  vPadding: PropTypes.oneOf(Object.values(REFS.PADDING)),
  hPadding: PropTypes.oneOf(Object.values(REFS.PADDING)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),

  children: PropTypes.node.isRequired,
};

Block.defaultProps = {
  id: undefined,
  size: null,
  textAlign: null,
  margin: REFS.MARGIN.M,
  padding: null,
  vPadding: null,
  hPadding: null,
  color: null,
};

Block.REFS = REFS;
