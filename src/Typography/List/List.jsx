import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { StyledListUl, StyledListOl } from './_style';

import ListItem from './_internal/ListItem';

export default function List(props) {
  const { type, ordered, size, color, children } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const Component = ordered || type === REFS.TYPES.OL ? StyledListOl : StyledListUl;

  return (
    <Component
      {...addDataAttributes({ component: COMPONENTS.GENERAL, size })}
      as={ordered || type === REFS.TYPES.OL ? 'ol' : 'ul'}
      sSize={size}
      sColorType={colorType}
      sColor={color}
    >
      {children}
    </Component>
  );
}

List.propTypes = {
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  ordered: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),

  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  type: REFS.TYPES.UL,
  ordered: false,
  size: null,
  color: null,
};

List.REFS = REFS;

List.Item = ListItem;
