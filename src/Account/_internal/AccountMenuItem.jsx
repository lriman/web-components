import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS } from '../_constants';
import { StyledAccountMenuItem } from '../_style';

export default function AccountMenuItem(props) {
  const { id, label, link, onClick } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const handleClick = () => {
    if (!link) onClick(id);
  };

  return (
    <StyledAccountMenuItem
      {...addDataAttributes({ component: COMPONENTS.MENU_ITEM, id })}
      as={link ? 'a' : 'div'}
      sColorType={colorType}
      href={link}
      onClick={handleClick}
    >
      {label}
    </StyledAccountMenuItem>
  );
}

AccountMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

AccountMenuItem.defaultProps = {
  link: undefined,
};
