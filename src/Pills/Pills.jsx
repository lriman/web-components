import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledPills, StyledPillsInner } from './_style';

import PillsItem from './_internal/PillsItem';
import ColorContext from '../_context/colorContext';

export default function Pills(props) {
  const { items, renderItem, type, noWrap, onItemClick } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledPills {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledPillsInner sColorType={colorType} sType={type} noWrap={noWrap}>
        {items.map(item => (
          <PillsItem
            key={item.id}
            item={item}
            colorType={colorType}
            renderItem={renderItem}
            type={type}
            onClick={onItemClick}
          />
        ))}
      </StyledPillsInner>
    </StyledPills>
  );
}

Pills.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      route: PropTypes.string,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  renderItem: PropTypes.func,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  noWrap: PropTypes.bool,
  onItemClick: PropTypes.func,
};

Pills.defaultProps = {
  type: REFS.TYPES.PRIMARY,
  renderItem: undefined,
  noWrap: false,
  onItemClick: null,
};

Pills.REFS = REFS;
