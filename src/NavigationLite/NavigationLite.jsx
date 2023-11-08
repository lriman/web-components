import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import { MEDIA_BREAKPOINTS } from '../_constants';

import Popup, { Opener, Box } from '../Popup';
import IconMenuOpen from '../Icon/IconMenuOpen';
import IconMenuClose from '../Icon/IconMenuClose';

import { COMPONENTS, REFS } from './_constants';
import { findActive } from './_utils';
import {
  StyledNavigationLite,
  StyledNavigationLiteExpanded,
  StyledNavigationLiteOpener,
  StyledNavigationLiteOpenerIcon,
  StyledNavigationLiteOpenerValue,
  StyledNavigationLitePopup,
} from './_style';

import NavigationLiteItems from './_internal/NavigationLiteItems';

export default function NavigationLite(props) {
  const { items, onItemClick } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleItemClick = params => {
    setIsPopupOpen(false);
    onItemClick(params);
  };

  const active = findActive(items);

  return (
    <StyledNavigationLite {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      {windowWidth < MEDIA_BREAKPOINTS.TABLET ? (
        <div>
          <Popup isOpened={isPopupOpen} onOpen={handlePopupOpen} onClose={handlePopupClose}>
            <Opener display={Opener.REFS.DISPLAY.BLOCK}>
              <StyledNavigationLiteOpener>
                <StyledNavigationLiteOpenerIcon>
                  {!isPopupOpen && <IconMenuOpen size={IconMenuOpen.REFS.SIZES.L} />}
                  {isPopupOpen && <IconMenuClose size={IconMenuClose.REFS.SIZES.L} />}
                </StyledNavigationLiteOpenerIcon>
                {active && <StyledNavigationLiteOpenerValue>{active.title}</StyledNavigationLiteOpenerValue>}
              </StyledNavigationLiteOpener>
            </Opener>
            <Box placement={Box.REFS.PLACEMENT.BOTTOM} align={Box.REFS.ALIGN.START}>
              <StyledNavigationLitePopup>
                <NavigationLiteItems items={items} onItemClick={handleItemClick} />
              </StyledNavigationLitePopup>
            </Box>
          </Popup>
        </div>
      ) : (
        <StyledNavigationLiteExpanded>
          <NavigationLiteItems items={items} onItemClick={onItemClick} />
        </StyledNavigationLiteExpanded>
      )}
    </StyledNavigationLite>
  );
}

NavigationLite.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.node.isRequired,
      type: PropTypes.oneOf(Object.values(REFS.ITEMS_TYPES)),
      items: PropTypes.arrayOf(PropTypes.shape()),
      active: PropTypes.bool,
    }),
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

NavigationLite.REFS = REFS;
