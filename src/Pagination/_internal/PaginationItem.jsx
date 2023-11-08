import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Span from '../../Typography/Span';
import { IconArrowLeft, IconArrowRight } from '../../Icon';
import ColorContext from '../../_context/colorContext';

import { REFS } from '../_constants';
import { StyledPaginationItem } from '../_style';

export default function PaginationItem(props) {
  const { item, active, showPageItems, onChange } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const handleChange = () => {
    if (item.disabled || item.label === '...' || item.id === active) return;

    if (item.id === REFS.PAGE_SIDES.LEFT_PAGE) {
      onChange(active - 1);
      return;
    }

    if (item.id === REFS.PAGE_SIDES.RIGHT_PAGE) {
      onChange(active + 1);
      return;
    }

    onChange(item.id);
  };

  const isButton = item.id === REFS.PAGE_SIDES.LEFT_PAGE || item.id === REFS.PAGE_SIDES.RIGHT_PAGE;

  return (
    <StyledPaginationItem
      isActive={item.id === active}
      isDisabled={item.disabled}
      isEllipsis={item.label === '...'}
      isButton={isButton}
      sColorType={colorType}
      onClick={handleChange}
    >
      {item.id === REFS.PAGE_SIDES.LEFT_PAGE && <IconArrowLeft />}
      {item.id === REFS.PAGE_SIDES.RIGHT_PAGE && <IconArrowRight />}
      {item.label && <Span>{showPageItems && item.extra ? item.extra : item.label}</Span>}
    </StyledPaginationItem>
  );
}

PaginationItem.propTypes = {
  item: PropTypes.shape().isRequired,
  active: PropTypes.number.isRequired,
  showPageItems: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

PaginationItem.defaultProps = {
  showPageItems: false,
};
