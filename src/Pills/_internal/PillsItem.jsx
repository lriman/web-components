import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS } from '../_constants';
import { StyledPillsItem, StyledPillsItemInner } from '../_style';

export default function PillsItem(props) {
  const { item, colorType, type, renderItem, onClick } = props;
  const { id, title, active, disabled } = item;

  const handleOnClick = () => {
    if (!active && !disabled) onClick(id);
  };

  return (
    <StyledPillsItem {...addDataAttributes({ component: COMPONENTS.ITEM, id })} sType={type}>
      <StyledPillsItemInner
        onClick={handleOnClick}
        isActive={active}
        isDisabled={disabled}
        sColorType={colorType}
        sType={type}
      >
        {renderItem ? renderItem(item) : title}
      </StyledPillsItemInner>
    </StyledPillsItem>
  );
}

PillsItem.propTypes = {
  item: PropTypes.shape().isRequired,
  colorType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  renderItem: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

PillsItem.defaultProps = {
  renderItem: undefined,
};
