import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS } from '../_constants';
import { StyledMenuMain, StyledMenuMainInner } from '../_style';

import MenuItem from './MenuItem';

function MenuMain(props) {
  const { width, items, size, isBordered, onItemClick } = props;
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledMenuMain
      {...addDataAttributes({ component: COMPONENTS.MAIN })}
      sColorType={colorType}
      isBordered={isBordered}
    >
      <StyledMenuMainInner sWidth={width}>
        {items.map(item => (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            active={item.active}
            size={size}
            onClick={onItemClick}
            isMain
          />
        ))}
      </StyledMenuMainInner>
    </StyledMenuMain>
  );
}

MenuMain.propTypes = {
  width: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      active: PropTypes.bool,
    }),
  ).isRequired,
  size: PropTypes.string.isRequired,
  isBordered: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default MenuMain;
