import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { COMPONENTS } from '../_constants';
import { StyledTabsItem, StyledTabsItemInner } from '../_style';

export default function TabsItem(props) {
  const { id, title, active, onClick } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const handleOnClick = () => {
    if (!active) onClick(id);
  };

  return (
    <StyledTabsItem {...addDataAttributes({ component: COMPONENTS.ITEM, id })}>
      <StyledTabsItemInner onClick={handleOnClick} isActive={active} sColorType={colorType}>
        {title}
      </StyledTabsItemInner>
    </StyledTabsItem>
  );
}

TabsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

TabsItem.defaultProps = {
  active: false,
};
